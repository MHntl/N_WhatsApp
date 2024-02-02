import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';

const FloatActionButton = props => {
  const {
    size = 'medium',
    status = 'primary',
    appearance = 'filled',
    title,
    icon,
  } = props;
  return (
    <TouchableOpacity {...props} style={[styles.container]}>
      {props.icon}
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.AccentColors.Green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 3,
    position: 'absolute',
    zIndex: 99,
    bottom: 20,
    right: 20,
    padding: 20,
  },
});
