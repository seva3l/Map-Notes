import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import Marker from './Marker';
import { INotes } from '@interfaces/interfaces';
import { verticalScale } from 'react-native-size-matters';


Mapbox.setAccessToken(process.env.MAPBOX_TOKEN || '');
interface Props{
  data:INotes[]
}

export default function MapScreen({data}: Props) {
  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          zoomLevel={10}
          centerCoordinate={[121.0447, 14.676]}
        />
        {data.map((note,index) => <Marker key={index} {...note}/>)}
      </Mapbox.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height: verticalScale(400),
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
