import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import ArrowLeftSVG from '@assets/icons/ArrowLeft';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@constants/Colors';

interface Props {
  title?: string;
  routeName?: string;
}
export default function BackButton(props: Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ zIndex: 10, flexDirection: 'row', alignItems: 'center' }}
      onPress={() => navigation.goBack()}
    >
      <ArrowLeftSVG />
      <Text style={{ fontSize: 16, fontWeight: '600',color: Colors.primary }}>{props.title}</Text>
    </TouchableOpacity>
  );
}
