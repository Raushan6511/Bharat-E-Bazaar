import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './favoritesScreen-styles';

const FavoritesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Screen</Text>
    </View>
  );
};

export default FavoritesScreen;
