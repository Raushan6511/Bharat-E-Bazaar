import React from 'react';
import {Text, Pressable, StyleProp, ViewStyle} from 'react-native';

import {colors} from '@theme';
import {BUTTON_PRESET} from '@common';

import {styles} from './bbButton-styles';

interface IBBButtonType {
  title: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  buttonHandler: () => void;
  customTitleColor?: string;
  buttonType?: string;
  isDisabled?: boolean;
}

const BBButton: React.FC<IBBButtonType> = props => {
  const {
    title,
    customButtonStyle,
    buttonHandler,
    customTitleColor = colors.palette.white,
    buttonType = BUTTON_PRESET.PRIMARY,
    isDisabled = false,
  } = props;

  const getButtonStyle = () => {
    let buttonStyle = {};
    let titleColor = {};
    switch (buttonType) {
      case BUTTON_PRESET.PRIMARY:
        buttonStyle = [
          styles.button,
          styles.primaryButton,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        titleColor = {color: colors.palette.white};
        break;
      case BUTTON_PRESET.SECONDARY:
        buttonStyle = [
          styles.button,
          styles.secondaryButton,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        titleColor = {color: colors.primary};
        break;
      case BUTTON_PRESET.CUSTOM:
        buttonStyle = [
          styles.button,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        titleColor = {color: customTitleColor};
        break;
      default:
        buttonStyle = {};
        titleColor = {};
    }
    return {buttonStyle, titleColor};
  };

  const {buttonStyle, titleColor} = getButtonStyle();

  return (
    <Pressable
      onPress={isDisabled ? () => {} : buttonHandler}
      style={buttonStyle}>
      <Text style={[styles.title, titleColor]}>{title}</Text>
    </Pressable>
  );
};

export default BBButton;
