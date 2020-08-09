import React, { FC } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HeaderButton from '../components/HeaderButton';
import Colours from '../constants/Colours';

const Stack = createStackNavigator();

const MealsStackNavigator: FC = () => (
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
    <Stack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={({ route }) => ({
        title: route.params.headerTitle,
        headerBackTitle: 'Back',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? Colours.primaryColour : '#FFFFFF',
        },
        headerTintColor:
          Platform.OS === 'android' ? '#FFFFFF' : Colours.primaryColour,
      })}
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

export default MealsStackNavigator;
