import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';

const Badge = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: AppColors.NeutralColors.White}}>{count}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.AccentColors.Green,
    width: 22,
    height: 22,
    borderRadius: 100,
    marginTop: 5,
    marginRight: 10,
  },
});
