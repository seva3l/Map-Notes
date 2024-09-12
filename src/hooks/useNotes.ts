import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { INotes } from '@interfaces/interfaces';
import { getToken } from '@utils/asyncStorage';

export const useNotes = () => {
  const [notes, setNotes] = useState<INotes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch all notes from Firestore
  const getNotes = async () => {
    const userId = await getToken('userId');
    setLoading(true);
    const snapshot = await firestore()
    .collection('notes')
    .where('userId', '==', userId) // Filter by userId
    .get();
    const notesData = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        notes: data.notes,
        created: data.created.toDate(), // Convert Firestore timestamp to Date
        coordinates: data.coordinates,
        photoURL: data.photoURL,
      } as INotes;
    });
    setNotes(notesData);
    setLoading(false);
  };

  // Create a new note in Firestore
  const createNote = async (note: Omit<INotes, 'id' | 'created'>) => {
    const userId = await getToken('userId');
    const newNote = {
      ...note,
      title: note.title.trim(),
      notes: note.notes.trim(),
      created: firestore.FieldValue.serverTimestamp(), // Use FieldValue for Firestore timestamp
      userId,
    };
    const docRef = await firestore().collection('notes').add(newNote);
    setNotes((prev) => [
      { id: docRef.id, ...note, created: new Date() }, // Default Date for created
      ...prev,
    ]);
    getNotes();
  };

  // Update an existing note in Firestore
  const updateNote = async (noteId: string, updatedFields: Partial<INotes>) => {
    const trimmedFields = {
      ...updatedFields,
      title: updatedFields.title?.trim(),
      notes: updatedFields.notes?.trim(),
    };
    await firestore().collection('notes').doc(noteId).update(trimmedFields);
    setNotes((prev) =>
      prev.map((note) => (note.id === noteId ? { ...note, ...updatedFields } : note))
    );
  };

  // Delete a note from Firestore
  const deleteNote = async (noteId: string) => {
    await firestore().collection('notes').doc(noteId).delete();
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  };

  // Get a note by its ID
  const getNoteById = async (noteId: string): Promise<INotes | null> => {
    try {
      const doc = await firestore().collection('notes').doc(noteId).get();
      if (doc.exists) {
        const data = doc.data();
        return {
          id: doc.id,
          title: data?.title,
          notes: data?.notes,
          created: data?.created?.toDate(),
          coordinates: data?.coordinates,
          photoURL: data?.photoURL,
        } as INotes;
      } else {
        console.error('No such note with the given ID.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching note by ID: ', error);
      return null;
    }
  };

  // Upload an image to Firebase Storage
  const uploadImage = async (uri: string, fileName: string): Promise<string | null> => {
    try {
      const reference = storage().ref(fileName);
      const task = reference.putFile(uri);

      // Track upload progress
      task.on('state_changed', (taskSnapshot) => {
        const progress = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      });

      await task;
      const url = await reference.getDownloadURL();
      return url;
    } catch (error) {
      console.error('Error uploading image: ', error);
      return null;
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return {
    notes,
    loading,
    getNotes,
    createNote,
    updateNote,
    deleteNote,
    getNoteById,
    uploadImage,
  };
};
