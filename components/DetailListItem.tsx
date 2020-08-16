import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface DetailListItemProps {
  children: React.ReactNode;
}

const DetailListItem: FC<DetailListItemProps> = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    padding: 10,
  },
});

export default DetailListItem;
