import React, { useEffect, useRef, useState } from 'react';
import Container from '@components/Container';
import { useNotes } from '../../../hooks/useNotes';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { Modalize } from 'react-native-modalize';
import Geolocation from 'react-native-geolocation-service';
import CreateNote from './components/CreateNote';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '@constants/Colors';
import Loading from '@components/Loading';

const NotesTab = () => {
  const modalRef = useRef<Modalize>(null);
  const [createdAt, setCreatedAt] = useState<Date>(new Date());
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const { createNote, notes, loading, getNotes, uploadImage } = useNotes();
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const tabNavigation = useNavigation();

  const isButtonDisabled = !title || !note;

  useEffect(() => {
    const unsubscribe = tabNavigation.addListener('focus', () => {
      getNotes();
    });
    return unsubscribe;
  }, [getNotes, tabNavigation]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const displayBottomTabs = () => {
    tabNavigation.setOptions({
      tabBarStyle: {
        display: 'flex',
        paddingHorizontal: moderateScale(25),
        paddingVertical: moderateScale(10),
        backgroundColor: Colors.primary,
      },
    });
  };

  const hideBottomTabs = () => {
    tabNavigation.setOptions({ tabBarStyle: { display: 'none' } });
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates([longitude, latitude]);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const openModal = () => {
    if (modalRef.current) {
      hideBottomTabs();
      modalRef.current.open();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (selectedImage) {
      const imageUrl = await uploadImage(selectedImage, `notes/${Date.now()}.jpg`);
      if (imageUrl) {
        const newNote = {
          title,
          notes: note,
          photoURL: imageUrl,
          coordinates: coordinates as [number, number],
          created: createdAt,
        };
        await createNote(newNote);
      }
    } else {
      const newNote = {
        title,
        notes: note,
        coordinates: coordinates as [number, number],
        created: createdAt,
      };
      await createNote(newNote);
    }
    setSelectedImage('');
    setIsLoading(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <Header openCreateModal={openModal} />
      <Container>{loading ? <Loading /> : <NoteList notes={notes} />}</Container>
      <CreateNote
        isButtonDisabled={isButtonDisabled}
        modalizeRef={modalRef}
        date={createdAt}
        setDate={setCreatedAt}
        setTitle={setTitle}
        setNotes={setNote}
        handleSubmit={handleSubmit}
        onModalClosed={displayBottomTabs}
        loading={isLoading}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
};

export default NotesTab;
