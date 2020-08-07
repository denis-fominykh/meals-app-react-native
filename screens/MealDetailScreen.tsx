import React, { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { MEALS } from '../data/dummyData';

interface MealDetailScreenProps {
  route: any;
  navigation: any;
}

const MealDetailScreen: FC<MealDetailScreenProps> = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Text>{selectedMeal ? selectedMeal.title : 'Error'}</Text>
      <Button
        title="Go to CategoriesScreen"
        onPress={() => navigation.popToTop()}
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
  },
});

export default MealDetailScreen;
