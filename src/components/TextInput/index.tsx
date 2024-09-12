import EyeOffSVG from '@assets/icons/EyeOff';
import EyeOpenSVG from '@assets/icons/EyeOpen';
import PenSVG from '@assets/icons/Pen';
import CheckSVG from '@assets/icons/Check';
import { Colors } from '@constants/Colors';
import Settings from '@constants/Settings';
import React, { useState, useRef } from 'react';
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  KeyboardTypeOptions,
  ScrollView,
  InputAccessoryView,
  Platform,
  Keyboard,
  Button,
  TouchableOpacity,
} from 'react-native';

import styles from './_styles';

interface IbaseTextInput
  extends Omit<TextInputProps, 'autoCapitalize' | 'keyboardType'> {
  label?: string;
  value?: string;
  placeholder?: string;
  backgroundColor?: string;
  setText?: (e: string) => void;
  narrow?: boolean;
  icon?: string;
  iconPosition?: 'before' | 'after';
  iconColor?: string;
  iconOnPress?: React.Dispatch<string>;
  iconClearText?: boolean;
  editable?: boolean;
  required?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: KeyboardTypeOptions;
  numeric?: boolean;
  maxLength?: number;
  suggestions?: any;
  handleSelectSuggestion?: any;
  onSelectSuggestion?: any;
  activeSuggestion?: number;
  elementIdSuggestion?: number;
  secureTextEntry?: boolean;
  labelBlur?: string;
  scrollViewRef?: React.RefObject<ScrollView>;
  isFocused?: boolean;
  unit?: string;
  updateData?: () => void
}

export const BrandTextInput = React.memo((props: IbaseTextInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View style={{ width: '100%' }}>
      {props.label !== undefined && props.label !== '' && (
        <Text style={[Settings.labelTxt, { marginBottom: 4 }]}>
          {props.label}
        </Text>
      )}
      <View style={[styles.container]}>
        <TextInput
          style={[styles.input]}
          autoCapitalize={props.autoCapitalize ? 'sentences' : 'none'}
          placeholderTextColor="#A9ABAD"
          placeholder={
            (props.placeholder ? props.placeholder : '') +
            ((props.label === undefined || props.label === '') && props.required
              ? '*'
              : ' ')
          }
          onChangeText={props.setText}
          value={props.value}
          editable={props.editable}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          maxLength={props.maxLength ? props.maxLength : 100000}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={props.secureTextEntry}
        />
        {props.unit !== undefined && (
          <Text
            style={[
              {
                paddingRight: 12,
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '500',
                color: Colors.labelBlurColor,
              },
            ]}
          >
            {props.unit}
          </Text>
        )}
      </View>
    </View>
  );
});

export const BrandEmailEditableInput = (props: IbaseTextInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const onEdit = () => {
    setIsEditable(!isEditable);
    setIsFocused(!isFocused);
  };

  const handleUpdate = () => {
    if (props.updateData) {
      props.updateData();
    }
    setIsEditable(!isEditable);
    setIsFocused(!isFocused);
  };
  return (
    <View style={{ width: '100%' }}>
      {props.label !== undefined && props.label !== '' && (
        <Text style={[Settings.labelTxt, { marginBottom: 4 }]}>
          {props.label}
        </Text>
      )}
      <View
        style={[
          styles.container,
          {
            borderColor: isFocused ? Colors.primary : '#FFF',
          },
        ]}
      >
        <TextInput
          style={[styles.input]}
          autoCapitalize={props.autoCapitalize ? 'sentences' : 'none'}
          placeholder={
            (props.placeholder ? props.placeholder : '') +
            ((props.label === undefined || props.label === '') && props.required
              ? '*'
              : ' ')
          }
          onChangeText={props.setText}
          value={props.value}
          editable={isEditable}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          maxLength={props.maxLength ? props.maxLength : 100000}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity style={{ paddingRight: 35 }} onPress={onEdit}>
          {isEditable ? (
            <TouchableOpacity onPress={handleUpdate}>
              <CheckSVG />
            </TouchableOpacity>
          ) : (
            <PenSVG />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BrandPasswordEditableInput = (props: IbaseTextInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const onEdit = () => {
    setIsEditable(!isEditable);
    setIsFocused(!isFocused);
  };
  const handleUpdate = () => {
    if (props.updateData) {
      props.updateData();
    }
    setIsEditable(!isEditable);
    setIsFocused(!isFocused);
  };
  return (
    <View style={{ width: '100%' }}>
      {props.label !== undefined && props.label !== '' && (
        <Text style={[Settings.labelTxt, { marginBottom: 4 }]}>
          {props.label}
        </Text>
      )}
      <View
        style={[
          styles.container,
          {
            borderColor: isFocused ? Colors.primary : '#FFF',
          },
        ]}
      >
        <TextInput
          style={[styles.input]}
          autoCapitalize={props.autoCapitalize ? 'sentences' : 'none'}
          placeholder={
            (props.placeholder ? props.placeholder : '') +
            ((props.label === undefined || props.label === '') && props.required
              ? '*'
              : ' ')
          }
          secureTextEntry={!isEditable}
          onChangeText={props.setText}
          value={props.value}
          editable={isEditable}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          maxLength={props.maxLength ? props.maxLength : 100000}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity style={{ paddingRight: 35 }} onPress={onEdit}>
          {isEditable ? (
            <TouchableOpacity onPress={handleUpdate}>
              <CheckSVG />
            </TouchableOpacity>
          ) : (
            <PenSVG />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BrandPasswordInput = (props: IbaseTextInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View style={{ width: '100%' }}>
      {props.label !== undefined && props.label !== '' && (
        <Text style={[Settings.labelTxt, { marginBottom: 4 }]}>
          {props.label}
        </Text>
      )}
      <View
        style={[
          styles.container,
          {
            borderColor:  Colors.primary,
            backgroundColor: '#FFF',
          },
        ]}
      >
        <TextInput
          style={[styles.input]}
          autoCapitalize={props.autoCapitalize ? 'sentences' : 'none'}
          placeholderTextColor="#A9ABAD"
          placeholder={
            (props.placeholder ? props.placeholder : '') +
            ((props.label === undefined || props.label === '') && props.required
              ? '*'
              : ' ')
          }
          secureTextEntry={!showPassword}
          onChangeText={props.setText}
          value={props.value}
          editable={props.editable}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          maxLength={props.maxLength ? props.maxLength : 100000}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity
          style={{ paddingRight: 35 }}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOpenSVG width={20} height={20} />
          ) : (
            <EyeOffSVG width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BrandMessageInput = (props: IbaseTextInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInputRef = useRef<TextInput>(null);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onFocus = () => {
    // if (Platform.OS === 'ios' && props.scrollViewRef?.current && textInputRef.current) {
    //     textInputRef.current.measureLayout(
    //         props.scrollViewRef.current,
    //         (x, y, width, height) => {
    //           // Calculate the position of the TextInput relative to the ScrollView
    //           const scrollToY = y - height; // You might need to adjust this calculation based on your layout
    //           // Scroll the ScrollView to the calculated position
    //           props.scrollViewRef?.current?.scrollTo({ y: scrollToY, animated: true });
    //         },
    //         () => {}
    //       );
    // }
    setIsFocused(true);
  };

  return (
    <View>
      {props.label !== undefined && props.label !== '' && (
        <Text style={[Settings.labelTxt, { marginBottom: 4 }]}>
          {props.label}
        </Text>
      )}
      <View style={[styles.container]}>
        <TextInput
          ref={textInputRef}
          value={props.value}
          style={[styles.input,{textAlignVertical:'top'}]}
          onChangeText={props.setText}
          editable={props.editable}
          placeholder={props.placeholder}
          returnKeyType="done"
          inputAccessoryViewID="doneButtonId"
          onFocus={onFocus}
          onBlur={() => setIsFocused(false)}
          multiline
          numberOfLines={4}
        />
        {Platform.OS === 'ios' && (
          <InputAccessoryView nativeID="doneButtonId">
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                paddingRight: 10,
                backgroundColor: 'white',
              }}
            >
              <Button title="Done" onPress={dismissKeyboard} />
            </View>
          </InputAccessoryView>
        )}
      </View>
    </View>
  );
};

export const BrandEmailInput = (props: IbaseTextInput) => (
  <BrandTextInput
    label={props.label}
    value={props.value}
    setText={props.setText}
    icon="envelope"
    iconPosition="before"
    editable={props.editable}
    required={props.required}
    backgroundColor={props.backgroundColor}
    placeholder={props.placeholder}
    returnKeyType="done"
  />
);

export const BrandNumberInput = (props: IbaseTextInput) => {
  return (
    <BrandTextInput
      label={props.label}
      value={props.value}
      setText={props.setText}
      editable={props.editable}
      required={props.required}
      backgroundColor={props.backgroundColor}
      placeholder={props.placeholder}
      keyboardType="numeric"
      returnKeyType="done"
    />
  );
};
