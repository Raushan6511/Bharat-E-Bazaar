import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './newArrivalsScreen-styles';

const NewArrivalsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Arrivals Screen</Text>
    </View>
  );
};

export default NewArrivalsScreen;
