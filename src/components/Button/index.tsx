import { Colors } from '@constants/Colors';
import Settings from '@constants/Settings';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native';

interface LSButtonProps extends TouchableOpacityProps {
  label?: string;
  isDisabled?: boolean;
  width?: any;
  backgroundColor?: string;
  variant?: string;
  isLoading?: boolean;
  isDelete?: boolean
}
const Button = (props: LSButtonProps) => {
  return (
    <TouchableOpacity
      delayPressIn={0}
      onPress={props.onPress}
      style={[{
        padding: 15,
        borderRadius: 10,
        backgroundColor: props.disabled
          ? Colors.disabledButton
          : props.variant === 'outlined'
          ? 'transparent'
          : Colors.primary,
        justifyContent: 'center',
        borderWidth: props.variant === 'outlined' ? 0.9 : 0,
        borderColor:
          props.variant === 'outlined' ? Colors.primary : 'transparent',
        alignItems: 'center',
        width: props.width,
        flexDirection: 'row',

      }]}
      // disabled={props.isDisabled}
      {...props}
    >
      {!props.isLoading ? (
        <Text
          style={[
            {
              ...Settings.button,
            },
            props.variant === 'outlined'
              ? { color: Colors.primary }
              : { color: Colors.dark.text },
          ]}
        >
          {props.label}
        </Text>
      ) : (
        <ActivityIndicator color={Colors.light.background} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
