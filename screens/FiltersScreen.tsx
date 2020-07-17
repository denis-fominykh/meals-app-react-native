import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FiltersScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m in the FiltersScreen component!</Text>
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

export default FiltersScreen;
