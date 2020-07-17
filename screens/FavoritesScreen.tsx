import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FavoritesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m in the FavoritesScreen component!</Text>
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

export default FavoritesScreen;
