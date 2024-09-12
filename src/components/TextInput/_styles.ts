import { Colors } from '@constants/Colors';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: moderateScale(15),
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: Colors.primary,
    backgroundColor: '#FFF',
  },

  noBorderContainer: {
    borderColor: 'transparent',
  },

  input: {
    paddingHorizontal: '20@s',
    paddingVertical: '15@s',
    color: Colors.primaryText,
    fontSize: 16,
    width: '90%',
    flex: 1,
    fontWeight: '600',
  },

  message: {
    paddingTop: '16@s',
    height: '106@s',
  },

  narrowInput: {
    paddingVertical: '16@s',
  },
  scrollViewContainer: {
    left: 0,
    right: 0,
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: '200@s',
    minHeight: '200@s',
    top: -35,
  },
  // icon: {
  //     paddingVertical: 20,
  //     color: props.Colors.greyLight3
  // },

  iconBefore: {
    paddingLeft: 16,
  },

  iconAfter: {
    paddingRight: 16,
  },

  noPaddingLeft: {
    paddingLeft: 0,
  },
});

export default styles;
