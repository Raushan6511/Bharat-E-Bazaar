/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {BBButton, BBAppIcons} from '@components';
import {APP_ICON_PRESET} from '@common';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Hello Bharat-E-Bazaar</Text>
      <BBButton title={'Welcome'} buttonHandler={() => {}} />
      <BBAppIcons name={'rightcircle'} preset={APP_ICON_PRESET.ANT_DESIGN} />
    </SafeAreaView>
  );
}

export default App;
