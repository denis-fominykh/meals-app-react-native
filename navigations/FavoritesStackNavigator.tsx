import React, { FC } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import HeaderButton from '../components/HeaderButton';
import Colours from '../constants/Colours';

const Stack = createStackNavigator();

const FavoritesStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colours.primaryColour : '#FFFFFF',
          },
          headerTintColor:
            Platform.OS === 'android' ? '#FFFFFF' : Colours.primaryColour,
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.headerTitle,
          headerBackTitle: 'Back',
          headerRight: () => <HeaderButton />,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colours.primaryColour : '#FFFFFF',
          },
          headerTintColor:
            Platform.OS === 'android' ? '#FFFFFF' : Colours.primaryColour,
        })}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
