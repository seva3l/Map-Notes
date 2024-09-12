import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@navigation/StackNavigator';
import { Colors } from '@constants/Colors';
import { moderateScale } from 'react-native-size-matters';
import { INotes } from '@interfaces/interfaces';


const Marker: React.FC<INotes> = ({ id, title, coordinates }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  return (
    <Mapbox.MarkerView
      key={id}
      coordinate={coordinates}
    >
      <TouchableOpacity style={styles.markerContainer}  onPress={(()=>navigation.navigate('Note',{noteId: id}))}>
          <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Mapbox.MarkerView>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.primary,
    padding: 5,
  },
  text:{
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: Colors.light.text,
  },
});

export default Marker;
