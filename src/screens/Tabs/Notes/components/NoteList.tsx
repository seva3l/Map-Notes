import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '@constants/Colors';
import { INotes } from '@interfaces/interfaces';
import EmptyList from './EmptyList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@navigation/StackNavigator';



const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};


interface Props{
  notes: INotes[]
}

const NoteList = ({notes}: Props) => {

  const sortedNotes = [...notes].sort((a, b) => b.created.getTime() - a.created.getTime());
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();


  const renderItem = ({ item }: { item: INotes; index: number }) => (
    <TouchableOpacity
      style={[styles.item]}
      onPress={(()=>navigation.navigate('Note',{noteId: item.id}))}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{formatDate(item.created)}</Text>
      <Text style={styles.notes}>{item.notes}</Text>
      {item.photoURL &&
      <View style={{marginTop: 10}}>
        <Image source={{uri: item.photoURL}} style={{height: 200,borderRadius:10}} resizeMode="cover"/>
      </View>
      }

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedNotes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 10,paddingBottom: 50,paddingTop: 20}}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    minHeight: 120,
    padding:16,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform:'capitalize',
  },
  notes: {
    marginTop: 20,
    fontSize: 16,
    color: '#FFF',
  },
  date: {
    fontSize: 14,
    color: Colors.labelBlurColor,
  },
});

export default NoteList;
