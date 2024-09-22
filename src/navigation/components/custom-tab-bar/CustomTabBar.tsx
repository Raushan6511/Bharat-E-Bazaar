import React, {useCallback} from 'react';
import {View, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {colors} from '@theme';
import {BBAppIcons} from '@components';
import {tabScreenData} from 'src/navigation/constants';

import {styles} from './customTabBar-styles';

interface CustomTabBarProps {
  defaultProps: BottomTabBarProps;
  data: tabScreenData[];
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({data, defaultProps}) => {
  const {state, navigation} = defaultProps;

  return (
    <View style={styles.tabBar}>
      {data.map((route, index) => {
        const {name, icon, type, size = 24} = route;
        const isFocused = state.index === index;
        const tabLabelColor = isFocused ? colors.primary : colors.palette.gray;

        const scale = useSharedValue(0);
        const opacity = useSharedValue(0);

        // Ripple effect animation
        const rippleStyle = useAnimatedStyle(() => ({
          transform: [{scale: scale.value}],
          opacity: opacity.value,
        }));

        const onPressIn = useCallback(() => {
          scale.value = withTiming(1, {duration: 100}); // Ripple expands
          opacity.value = withTiming(0.3, {duration: 100}); // Fade in
        }, [scale, opacity]);

        const onPressOut = useCallback(() => {
          scale.value = withTiming(0, {duration: 300}); // Ripple shrinks
          opacity.value = withTiming(0, {duration: 300}); // Fade out
        }, [scale, opacity]);

        const onPress = useCallback(() => {
          navigation.navigate(route.name, route.params);
        }, [navigation, route]);

        return (
          <Pressable
            key={index}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            style={styles.tab}>
            <BBAppIcons
              name={icon}
              preset={type}
              color={isFocused ? colors.primary : colors.palette.gray}
              iconPress={onPress}
              iconPressIn={onPressIn}
              iconPressOut={onPressOut}
              size={size}
            />
            <Animated.Text style={[styles.tabLabel, {color: tabLabelColor}]}>
              {name}
            </Animated.Text>
            <Animated.View style={[styles.ripple, rippleStyle]} />
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
