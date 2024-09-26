import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './trendsScreen-styles';

const TrendsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trends Screen</Text>
    </View>
  );
};

export default TrendsScreen;
