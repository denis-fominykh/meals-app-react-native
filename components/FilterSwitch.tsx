import React, { FC } from 'react';
import { StyleSheet, View, Text, Switch, Platform } from 'react-native';

import Colours from '../constants/Colours';

interface FilterSwitchProps {
  label: string;
  state: boolean;
  onChange: (value: boolean) => void;
}

const FilterSwitch: FC<FilterSwitchProps> = ({ label, state, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{
          true: Colours.primaryColour,
          false: '#D4D4D4',
        }}
        thumbColor={Platform.OS === 'android' ? Colours.primaryColour : ''}
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
  },
});

export default FilterSwitch;
