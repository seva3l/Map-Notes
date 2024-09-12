import { View, ActivityIndicator, Text } from 'react-native';
import React from 'react';
import { Colors } from '@constants/Colors';

interface Props {
  text?: string;
}
const Loading = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={Colors.primary} />
      {props.text && <Text>{props.text}</Text>}
    </View>
  );
};

export default Loading;
