import React, {useState, useEffect} from 'react';
import {TextInput, View, Animated, ViewStyle, TextStyle} from 'react-native';
import {KeyboardType} from 'react-native';
import {styles} from './bbInputBox-styles';
import {KEYBOARD_PRESET} from '@common';
import {colors} from '@theme';
import {getFontSize} from '@utils';

type IBBInputBox = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  isEmpty?: boolean;
  keyboardTypes?: KeyboardType;
  backGroundColor?: string;
  customInputBoxStyle?: ViewStyle;
};

const BBInputBox: React.FC<IBBInputBox> = props => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    multiline = false,
    style,
    inputStyle,
    isEmpty = false,
    keyboardTypes = KEYBOARD_PRESET.DEFAULT,
    backGroundColor = colors.background,
    customInputBoxStyle,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [animatedLabel] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [22, -8], // Adjust as necessary for desired label position
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [getFontSize(16), getFontSize(12)], // Size change between floating and resting
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.palette.black, colors.palette.black], // Color change from placeholder to focused
    }),
    backgroundColor: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [backGroundColor, backGroundColor], // Color change from placeholder to focused
    }),
  };

  const errorStyle = isEmpty ? {borderWidth: 1, borderColor: 'red'} : {};

  return (
    <View style={[styles.container, customInputBoxStyle]}>
      {isFocused && (
        <Animated.Text style={[styles.label, labelStyle]}>
          {placeholder}
        </Animated.Text>
      )}
      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          inputStyle,
          errorStyle,
        ]}
        placeholder={!isFocused && !value ? placeholder : ''}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        keyboardType={keyboardTypes}
      />
    </View>
  );
};

export default BBInputBox;
