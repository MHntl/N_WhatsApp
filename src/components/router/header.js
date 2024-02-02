import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';
import {height} from '../../utils/constant';

const Header = ({left, body, right}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>{left}</View>
      <View style={styles.body}>{body}</View>
      <View style={styles.right}>{right}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.BrandColors.White,
    minHeight: height / 14,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  left: {justifyContent: 'center'},
  body: {flex: 1, justifyContent: 'center'},
  right: {justifyContent: 'center'},
});
