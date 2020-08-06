import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Colours from './constants/Colours';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: 'Meal Categories',
              headerStyle: {
                backgroundColor:
                  Platform.OS === 'android' ? Colours.primaryColour : '#FFFFFF',
              },
              headerTintColor:
                Platform.OS === 'android' ? '#FFFFFF' : Colours.primaryColour,
            }}
          />
          <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
