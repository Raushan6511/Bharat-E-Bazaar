import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors, typography} from '@theme';
import {getFontSize} from '@utils';

interface Styles {
  tabBar: ViewStyle;
  tab: ViewStyle;
  ripple: ViewStyle;
  tabLabel: TextStyle;
  slidingBorder: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.palette.white,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // TODO: I can change according to my requirement
  ripple: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: colors.primary,
    zIndex: -1,
  },
  tabLabel: {
    fontSize: getFontSize(10),
    color: colors.primary,
    fontFamily: typography.regular,
  },
  slidingBorder: {
    position: 'absolute',
    height: 3,
    top: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});

export {styles};
