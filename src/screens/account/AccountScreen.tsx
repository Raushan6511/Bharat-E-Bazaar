import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './accountScreen-styles';

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;
