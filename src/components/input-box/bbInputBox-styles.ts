import {colors, typography} from '@theme';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  multilineInput: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    margin: 10,
  },
  label: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
    paddingHorizontal: 5,
    marginBottom: 4,
    fontFamily: typography.medium,
  },
  input: {
    padding: 8,
    borderColor: colors.palette.redOrange,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export {styles};
