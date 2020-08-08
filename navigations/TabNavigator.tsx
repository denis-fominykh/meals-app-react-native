import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import StackNavigator from './StackNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colours from '../constants/Colours';

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string = '';

        if (route.name === 'Meals') {
          iconName = focused ? 'fast-food' : 'fast-food-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'star-sharp' : 'star-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colours.primaryColour,
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Meals" component={StackNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
