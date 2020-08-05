import React, { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

interface CategoriesScreenProps {
  navigation: any;
}

const CategoriesScreen: FC<CategoriesScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m in the CategoriesScreen component!</Text>
      <Button
        title="Go to Meals"
        onPress={() => navigation.navigate('CategoryMeals')}
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

export default CategoriesScreen;
