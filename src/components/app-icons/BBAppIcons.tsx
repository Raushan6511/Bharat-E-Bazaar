import React from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome6ProIcon from 'react-native-vector-icons/FontAwesome6Pro';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

import {APP_ICON_PRESET} from '@common';

interface IBBAppIconProps {
  name: string;
  preset: string;
  size?: number;
  color?: string;
  iconPress?: () => void;
  iconPressIn?: () => void;
  iconPressOut?: () => void;
}

const iconComponents = {
  [APP_ICON_PRESET.ANT_DESIGN]: AntDesignIcon,
  [APP_ICON_PRESET.ENTYPO]: EntypoIcon,
  [APP_ICON_PRESET.EVIL_ICONS]: EvilIconsIcon,
  [APP_ICON_PRESET.FEATHER]: FeatherIcon,
  [APP_ICON_PRESET.FONT_AWESOME]: FontAwesomeIcon,
  [APP_ICON_PRESET.FONT_AWESOME5]: FontAwesome5Icon,
  [APP_ICON_PRESET.FONT_AWESOME_5PRO]: FontAwesome5ProIcon,
  [APP_ICON_PRESET.FONT_AWESOME6]: FontAwesome6Icon,
  [APP_ICON_PRESET.FONT_AWESOME_6PRO]: FontAwesome6ProIcon,
  [APP_ICON_PRESET.FONTISTO]: FontistoIcon,
  [APP_ICON_PRESET.FOUNDATION]: FoundationIcon,
  [APP_ICON_PRESET.IONICONS]: IoniconsIcon,
  [APP_ICON_PRESET.MATERIAL_COMMUNITY]: MaterialCommunityIcon,
  [APP_ICON_PRESET.MATERIAL_ICONS]: MaterialIconsIcon,
  [APP_ICON_PRESET.OCTICONS]: OcticonsIcon,
  [APP_ICON_PRESET.ZOCIAL]: ZocialIcon,
};

console.log(typeof iconComponents);

const BBAppIcons: React.FC<IBBAppIconProps> = ({
  name,
  size = 30,
  color = 'black',
  preset,
  iconPress = () => {},
  iconPressIn = () => {},
  iconPressOut = () => {},
}) => {
  const IconComponent = iconComponents[preset];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      onPress={iconPress}
      onPressIn={iconPressIn}
      onPressOut={iconPressOut}
    />
  );
};

export default BBAppIcons;
