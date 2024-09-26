import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './cartScreen-styles';

const CartScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;
