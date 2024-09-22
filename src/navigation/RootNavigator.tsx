import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './bottom-tab-navigator/BottomTabNavigator';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
