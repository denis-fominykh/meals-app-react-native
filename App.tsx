import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TabNavigator from './navigations/TabNavigator';
import Colours from './constants/Colours';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={
          Platform.OS === 'android' ? Colours.primaryColour : '#FFFFFF'
        }
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
