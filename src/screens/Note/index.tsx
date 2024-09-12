import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StackParamList } from '@navigation/StackNavigator';
import { RouteProp } from '@react-navigation/native';
import Container from '@components/Container';
import { useNotes } from '@hooks/useNotes';
import { INotes } from '@interfaces/interfaces';
import Loading from '@components/Loading';
import BackButton from '@components/BackButton';
import BrandDatePicker from '@components/DatePicker';
import { BrandTextInput, BrandMessageInput } from '@components/TextInput';
import Button from '@components/Button';
import Spacer from '@components/Spacer';
import { useNavigation } from '@react-navigation/native';
import AttachPhoto from '@components/AttachPhoto';

type Props = {
  route: RouteProp<StackParamList, 'Note'>;
};

const NoteScreen = ({ route }: Props) => {
  const { getNoteById, updateNote, deleteNote, uploadImage } = useNotes();
  const { noteId } = route.params;
  const [note, setNote] = useState<INotes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchNote = async (id: string) => {
      setLoading(true);
      try {
        const fetchedNote = await getNoteById(id);
        if (fetchedNote) {
          setNote(fetchedNote);
          setSelectedImage(fetchedNote.photoURL);
        }
      } catch (error) {
      }
      setLoading(false);
    };

    fetchNote(noteId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId]);

  const setNoteField = (key: keyof INotes, value: any) => {
    setNote((prevNote) => {
      if (!prevNote) {
        return prevNote;
      }
      return { ...prevNote, [key]: value };
    });
  };

  const handleUpdate = async () => {
    if (!note) {
      return;
    }
    setLoading(true);
    const cleanedNote = Object.fromEntries(
      Object.entries(note).filter(([_, value]) => value !== undefined)
    );
    if (selectedImage && selectedImage !== note.photoURL) {
      try {
        const imageUrl = await uploadImage(selectedImage, `notes/${note.id}.jpg`);
        if (imageUrl) {
          cleanedNote.photoURL = imageUrl;
        }
      } catch (error) {
      }
    }


    try {
      await updateNote(note.id, cleanedNote);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
    }
  };

  const handleDelete = async () => {
    try {
      if (note) {
        await deleteNote(note.id);
      }
      navigation.goBack();
    } catch (error) {
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BackButton title={note?.title} />

      <Container>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{paddingBottom:100,paddingTop:20}}>
          {loading ? (
            <Text>Loading...</Text>
          ) : note ? (
            <View>
              <BrandDatePicker
                isEditing
                label="Created At"
                onPress={() => setOpen(true)}
                setOpen={setOpen}
                setDate={(date) => setNoteField('created', date)}
                date={note.created}
                open={open}
                onConfirm={(date) => setNoteField('created', date)}
                confirmText="Confirm"
                primary
              />
              <BrandTextInput
                value={note.title}
                setText={(e) => setNoteField('title', e)}
                label="Title"
              />
              <BrandMessageInput
                value={note.notes}
                setText={(e) => setNoteField('notes', e)}
                label="Notes"
              />
              <AttachPhoto selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            </View>
          ) : (
            <Text>Note not found</Text>
          )}
        </ScrollView>
        <View style={{ gap: 5 }}>
          <Button label="Update" onPress={handleUpdate} />
          <Button variant="outlined" label="Delete" onPress={handleDelete} />
        </View>
        <Spacer />
      </Container>
    </>
  );
};

export default NoteScreen;
