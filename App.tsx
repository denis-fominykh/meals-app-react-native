import 'react-native-gesture-handler';
import React, { FC, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';

import { fetchFonts } from './services/fetchFontsServices';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

const App: FC = () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error: Error) => console.log(error)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories" headerMode="none">
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
