import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colours from '../constants/Colours';

const HeaderButton: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name="star-sharp"
        size={23}
        color={Platform.OS === 'android' ? '#FFFFFF' : Colours.primaryColour}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});

export default HeaderButton;
