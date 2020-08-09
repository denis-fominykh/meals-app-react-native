import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colours from '../constants/Colours';

const HeaderButton: FC = () => {
  const icon =
    Platform.OS === 'android' ? (
      <MaterialCommunityIcons name="star-circle" color="#FFFFFF" size={25} />
    ) : (
      <Ionicons name="star-sharp" size={23} color={Colours.primaryColour} />
    );

  return <TouchableOpacity style={styles.container}>{icon}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});

export default HeaderButton;
