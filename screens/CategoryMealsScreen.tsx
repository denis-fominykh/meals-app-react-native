import React, { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

interface CategoryMealsScreenProps {
  navigation: any;
}

const CategoryMealsScreen: FC<CategoryMealsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m in the CategoryMealsScreen component!</Text>
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
