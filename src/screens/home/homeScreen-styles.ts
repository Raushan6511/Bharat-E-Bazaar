import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors, typography} from '@theme';

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
    fontSize: 30,
    marginVertical: 20,
    textAlign: 'center',
    fontFamily: typography.ultraBold,
  },
});

export {styles};
