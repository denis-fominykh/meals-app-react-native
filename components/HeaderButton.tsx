import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colours from '../constants/Colours';

interface HeaderButtonProps {
  androidIconName: string;
  iosIconName: string;
  onPress?: () => void;
}

const HeaderButton: FC<HeaderButtonProps> = ({
  androidIconName,
  iosIconName,
  onPress,
}) => {
  const icon =
    Platform.OS === 'android' ? (
      <MaterialCommunityIcons
        name={androidIconName}
        color="#FFFFFF"
        size={25}
      />
    ) : (
      <Ionicons name={iosIconName} size={23} color={Colours.primaryColour} />
    );

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default HeaderButton;
