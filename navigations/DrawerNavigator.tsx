import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colours from '../constants/Colours';
import TabNavigator from './TabNavigator';
import FiltersStackNavigator from './FiltersStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerContentOptions={{
        activeTintColor: Colours.accentColour,
        labelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="MealsFavs"
        component={TabNavigator}
        options={{
          title: 'Meals',
        }}
      />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
