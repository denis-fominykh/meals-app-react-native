import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import DrawerNavigator from './navigations/DrawerNavigator';
import Colours from './constants/Colours';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar
          backgroundColor={
            Platform.OS === 'android' ? Colours.primaryColour : '#FFFFFF'
          }
          barStyle={
            Platform.OS === 'android' ? 'light-content' : 'dark-content'
          }
        />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
