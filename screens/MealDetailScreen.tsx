import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
} from 'react-native';

import { MEALS } from '../data/dummyData';
import DetailListItem from '../components/DetailListItem';

interface MealDetailScreenProps {
  route: any;
  navigation: any;
}

const MealDetailScreen: FC<MealDetailScreenProps> = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedMeal ? selectedMeal.imageUrl : 'null' }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text>{selectedMeal ? selectedMeal.duration : 'Some Error!'} min</Text>
        <Text>
          {selectedMeal ? selectedMeal.complexity.toUpperCase() : 'Some Error!'}
        </Text>
        <Text>
          {selectedMeal
            ? selectedMeal.affordability.toUpperCase()
            : 'Some Error!'}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {!selectedMeal ? (
        <Text>Ingredients Error</Text>
      ) : (
        selectedMeal.ingredients.map((ingredient, idx) => (
          <DetailListItem key={idx}>{ingredient}</DetailListItem>
        ))
      )}
      <Text style={styles.title}>Steps</Text>
      {!selectedMeal ? (
        <Text>Ingredients Error</Text>
      ) : (
        selectedMeal.steps.map((step, idx) => (
          <DetailListItem key={idx}>{step}</DetailListItem>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default MealDetailScreen;
