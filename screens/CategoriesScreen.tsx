import React, { FC } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummyData';
import CategoryGridTile from '../components/CategoryGridTile';

interface CategoriesScreenProps {
  navigation: any;
}

const CategoriesScreen: FC<CategoriesScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryGridTile
            navigation={navigation}
            item={item}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});

export default CategoriesScreen;
