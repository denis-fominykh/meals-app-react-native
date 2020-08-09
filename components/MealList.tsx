import React, { FC } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Meal from '../models/meal';
import MealItem from './MealItem';

interface MealListProps {
  navigation: any;
  listData: Meal[];
}

const MealList: FC<MealListProps> = ({ navigation, listData }) => {
  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: '100%' }}
        keyExtractor={(item) => item.id}
        data={listData}
        renderItem={({ item }) => (
          <MealItem navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

export default MealList;
