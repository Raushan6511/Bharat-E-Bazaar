import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '@theme';
import {getFontSize} from '@utils';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  title: {
    color: colors.palette.black,
    fontSize: getFontSize(30),
    marginVertical: 20,
    textAlign: 'center',
  },
});

export {styles};
