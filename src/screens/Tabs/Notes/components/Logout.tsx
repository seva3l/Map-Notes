import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import SignOutSVG from '@assets/icons/SignOut';
import { moderateScale } from 'react-native-size-matters';
import { useAuth } from '@hooks/useAuth';

const Logout = () => {
  const {signOut} = useAuth();
  return (
    <TouchableOpacity style={styles.container} onPress={signOut}>
      <SignOutSVG />
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
  },
  text: {
    fontSize: moderateScale(13),
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#FFF',
  },
});
