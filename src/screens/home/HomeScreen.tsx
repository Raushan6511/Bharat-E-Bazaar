import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {BBButton, BBInputBox} from '@components';
import {BUTTON_PRESET} from '@common';

import {styles} from './homeScreen-styles';
import {colors} from '@theme';

const HomeScreen: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BBButton
          title={'Cancel'}
          buttonHandler={() => {}}
          buttonType={BUTTON_PRESET.SECONDARY}
          customButtonStyle={{flex: 1}}
        />
        <BBButton
          title={'Press Me'}
          buttonHandler={() => {}}
          customButtonStyle={{flex: 1}}
        />
      </View>
      <BBButton title={'Home'} buttonHandler={() => {}} />
      <BBInputBox
        value={text}
        onChangeText={setText}
        secureTextEntry={false}
        multiline={false}
        placeholder={'Phone Number'}
        backGroundColor={colors.background}
      />
      <BBInputBox
        value={text}
        onChangeText={setText}
        secureTextEntry={false}
        multiline={false}
        placeholder={'Email'}
        backGroundColor={colors.background}
      />
    </View>
  );
};

export default HomeScreen;
