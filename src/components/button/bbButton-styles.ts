import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors, typography} from '@theme';
import {getFontSize} from '@utils';

interface Styles {
  button: ViewStyle;
  title: TextStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  disable: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    alignItems: 'center',
    backgroundColor: colors.palette.black,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  primaryButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: getFontSize(18),
    fontFamily: typography.regular,
    textAlign: 'center',
  },
  disable: {
    backgroundColor: colors.palette.grey,
  },
});

export {styles};
