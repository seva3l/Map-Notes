import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from './Colors';

const Settings = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    flex: 1,
  },
  labelTxt: {
    fontSize: moderateScale(12),
    fontWeight: 500,
    lineHeight: verticalScale(16),
    color: Colors.primaryText,
  },
  button: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    lineHeight: verticalScale(18),
  },
});

export default Settings;
