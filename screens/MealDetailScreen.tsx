import React, { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

interface MealDetailScreenProps {
  navigation: any;
}

const MealDetailScreen: FC<MealDetailScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m in the MealDetailScreen component!</Text>
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
