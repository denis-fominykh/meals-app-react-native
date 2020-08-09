import React, { FC } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MealsStackNavigator from './MealsStackNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colours from '../constants/Colours';

const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

const TabNavigator: FC = () => {
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    return (
      <MaterialTab.Navigator
        initialRouteName="Meals"
        activeColor="#FFFFFF"
        shifting={true}
      >
        <MaterialTab.Screen
          name="Meals"
          component={MealsStackNavigator}
          options={{
            tabBarLabel: 'Meals',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="food-fork-drink"
                color={color}
                size={26}
              />
            ),
            tabBarColor: Colours.primaryColour,
          }}
        />
        <MaterialTab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="star-circle"
                color={color}
                size={26}
              />
            ),
            tabBarColor: Colours.accentColour,
          }}
        />
      </MaterialTab.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Meals') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'star-sharp' : 'star-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colours.accentColour,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Meals" component={MealsStackNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
