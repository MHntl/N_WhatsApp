import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';
import Region from '../../assets/icons/Region/26x26.svg';

const Input = props => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{props.icon}</View>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  icon: {position: 'absolute', zIndex: 10, left: 10},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: AppColors.NeutralColors.White,
    padding: 15,
    paddingLeft: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColors.BrandColors.Black,
  },
});
