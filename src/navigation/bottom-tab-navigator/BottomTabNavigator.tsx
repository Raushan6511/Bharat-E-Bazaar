import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/custom-tab-bar/CustomTabBar';

import {BottomTabScreens} from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const renderScreens = () => {
    return BottomTabScreens.map((item, index) => {
      return (
        <Tab.Screen key={index} name={item.route} component={item.screen} />
      );
    });
  };

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => (
        <CustomTabBar defaultProps={props} data={BottomTabScreens} />
      )}>
      {renderScreens()}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
