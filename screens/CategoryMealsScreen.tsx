import React, { FC } from 'react';

import { MEALS } from '../data/dummyData';
import MealList from '../components/MealList';

interface CategoryMealsScreenProps {
  route: any;
  navigation: any;
}

const CategoryMealsScreen: FC<CategoryMealsScreenProps> = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return <MealList navigation={navigation} listData={displayedMeals} />;
};

export default CategoryMealsScreen;
