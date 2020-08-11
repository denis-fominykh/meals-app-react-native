import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import FiltersStackNavigator from './FiltersStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator drawerPosition="left">
      <Drawer.Screen name="MealsFavs" component={TabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
