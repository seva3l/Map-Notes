import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '@constants/Colors';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      No notes yet!
      </Text>
      <Text style={styles.title}>
      Start by adding your first one
      </Text>
    </View>
  );
};

export default EmptyList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: '500',
    color: Colors.primary,
    textAlign: 'center',
  },
});
