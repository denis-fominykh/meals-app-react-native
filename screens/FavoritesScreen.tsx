import React, { FC } from 'react';

import { MEALS } from '../data/dummyData';
import MealList from '../components/MealList';

interface FavoritesScreenProps {
  navigation: any;
}

const FavoritesScreen: FC<FavoritesScreenProps> = ({ navigation }) => {
  const favMeal = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeal} navigation={navigation} />;
};

export default FavoritesScreen;
