import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './categoriesScreen-styles';

const CategoriesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories Screen</Text>
    </View>
  );
};

export default CategoriesScreen;
