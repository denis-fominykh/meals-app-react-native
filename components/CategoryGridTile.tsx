import React, { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

import Category from '../models/category';

interface CategoryGridTileProps {
  navigation: any;
  item: Category;
  color: string;
}

const CategoryGridTile: FC<CategoryGridTileProps> = ({
  navigation,
  item,
  color,
}) => {
  const TouchableComponent: React.ReactNode =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent
        style={{ flex: 1 }}
        onPress={() =>
          navigation.navigate('CategoryMeals', {
            categoryId: item.id,
            headerTitle: item.title,
          })
        }
      >
        <View style={{ ...styles.itemContainer, backgroundColor: color }}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CategoryGridTile;
