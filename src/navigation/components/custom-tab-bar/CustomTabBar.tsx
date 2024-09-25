import React, {useCallback, useEffect} from 'react';
import {View, Pressable, LayoutChangeEvent} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {BBAppIcons} from '@components';

import {colors, typography} from '@theme';
import {tabScreenData} from 'src/navigation/constants';

import {styles} from './customTabBar-styles';

interface CustomTabBarProps {
  defaultProps: BottomTabBarProps;
  data: tabScreenData[];
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({data, defaultProps}) => {
  const {state, navigation} = defaultProps;
  const translateX = useSharedValue(0);
  const tabWidth = useSharedValue(0);
  const borderColor = useSharedValue(colors.primary); // Default color for the sliding border

  // Animate the sliding border and its color
  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth.value, {
      duration: 300,
    });
    // Change the sliding border color based on the active tab's color
    borderColor.value = withTiming(data[state.index].color || colors.primary, {
      duration: 300,
    });
  }, [state.index, tabWidth]);

  // Style for sliding border with dynamic color
  const slidingBorderStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value + 10}],
    width: tabWidth.value - 20,
    backgroundColor: borderColor.value, // Dynamically set color
  }));

  const onLayout = (event: LayoutChangeEvent) => {
    // Calculate tab width dynamically based on container width and number of tabs
    const width = event.nativeEvent.layout.width / data.length;
    tabWidth.value = width;
  };

  return (
    <View style={styles.tabBar} onLayout={onLayout}>
      <Animated.View style={[styles.slidingBorder, slidingBorderStyle]} />
      {data.map((route, index) => {
        const {name, icon, type, size = 24, color = colors.primary} = route;
        const isFocused = state.index === index;
        const tabLabelStyle = isFocused
          ? {color: color, fontFamily: typography.medium}
          : {color: colors.palette.darkGrey};

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
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            key={index}
            style={styles.tab}>
            <BBAppIcons
              name={icon}
              preset={type}
              color={isFocused ? color : colors.palette.darkGrey}
              iconPress={onPress}
              iconPressIn={onPressIn}
              iconPressOut={onPressOut}
              size={size}
            />
            <Animated.Text style={[styles.tabLabel, tabLabelStyle]}>
              {name}
            </Animated.Text>
            <Animated.View
              style={[styles.ripple, rippleStyle, {backgroundColor: color}]}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
