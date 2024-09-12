import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Settings from '@constants/Settings';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <SafeAreaView edges={['right', 'left', 'top']} style={Settings.container}>
      {children}
    </SafeAreaView>
  );
}
