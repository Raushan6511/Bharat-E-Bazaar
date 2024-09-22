import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './ordersScreen-styles';

const OrdersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders Screen</Text>
    </View>
  );
};

export default OrdersScreen;
