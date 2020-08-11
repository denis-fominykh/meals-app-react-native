import React, { FC } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import FiltersScreen from '../screens/FiltersScreen';
import Colours from '../constants/Colours';
import HeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();

const FiltersStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation }) => ({
          title: 'Filter Meals',
          headerLeft: () => (
            <HeaderButton
              androidIconName="menu"
              iosIconName="ios-menu"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
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

export default FiltersStackNavigator;
