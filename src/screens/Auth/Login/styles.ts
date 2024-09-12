import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '@constants/Colors';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  logo: {
    width: 236,
    height: 200,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginTop: 41,
    color: Colors.primary,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
    marginTop: 48,
  },
  bottomContainer: {
    flexDirection: 'row',
    gap: moderateScale(5),
    alignSelf: 'center',
  },
  register: {
    color: Colors.primary,
    fontWeight: '700',
  },
  label:{
    color: Colors.labelBlurColor,
  },
});

export default styles;
