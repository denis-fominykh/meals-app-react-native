import React, { FC } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { MEALS } from '../data/dummyData';
import MealItem from '../components/MealItem';

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

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        keyExtractor={(item) => item.id}
        data={displayedMeals}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

export default CategoryMealsScreen;
