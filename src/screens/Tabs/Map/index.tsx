import { View } from 'react-native';
import React, { useEffect } from 'react';
import MapScreen from '@components/Maps/Map';
import { useNotes } from '@hooks/useNotes';
import { useNavigation } from '@react-navigation/native';

const MapTab = () => {
  const {notes,getNotes} = useNotes();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getNotes();
    });
    return unsubscribe;
  }, [getNotes, navigation]);

  return (
    <View style={{flex:1}}>
      <MapScreen data={notes}/>
    </View>
  );
};

export default MapTab;
