import React from 'react';
import {Text, View} from 'react-native';

import {BBButton} from '@components';
import {BUTTON_PRESET} from '@common';

import {styles} from './homeScreen-styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <BBButton
        title={'Cancel'}
        buttonHandler={() => {}}
        buttonType={BUTTON_PRESET.SECONDARY}
      />
      <BBButton title={'Press Me'} buttonHandler={() => {}} />
    </View>
  );
};

export default HomeScreen;
