import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';

const Button = props => {
  const {
    size = 'medium',
    status = 'primary',
    appearance = 'filled',
    title,
    icon,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        size === 'medium'
          ? styles.mediumButtonContainer
          : styles.largeButtonContainer,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.AccentColors.Green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 3,
  },
  largeButtonContainer: {
    padding: 20,
  },
  mediumButtonContainer: {
    padding: 15,
  },
  smallButtonContainer: {
    padding: 5,
  },
  title: {color: AppColors.BrandColors.White, fontSize: 18, fontWeight: '500'},
});
