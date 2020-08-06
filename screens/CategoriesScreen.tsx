import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

import { CATEGORIES } from '../data/dummyData';

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
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>
              navigation.navigate('CategoryMeals', {
                categoryId: item.id,
                headerTitle: item.title,
              })
            }
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
