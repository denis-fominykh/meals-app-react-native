import React, { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummyData';

interface CategoryMealsScreenProps {
  route: any;
  navigation: any;
}

const CategoryMealsScreen: FC<CategoryMealsScreenProps> = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return (
    <View style={styles.container}>
      <Text>{selectedCategory ? selectedCategory.title : 'Error'}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('MealDetail')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;
