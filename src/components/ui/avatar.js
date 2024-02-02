import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/constant';
import {AppColors} from '../../utils/colors';

const Avatar = props => {
  //Kullanici basharflerini alma
  //console.log(item.name.match(/\b\w/g).join('').toUpperCase());
  return (
    <Pressable style={styles.container}>
      {
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: AppColors.BrandColors.Black,
            textAlign: 'center',
          }}>
          {/* {item.name.match(/\b\w/g).join('').toUpperCase()} */}
          {props.item ? props.item.name[0] : props.name[0]}
          {props.item ? props.item.surname[0] : props.surname[0]}
        </Text>
      }
    </Pressable>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    width: width / 6,
    height: width / 6,
    backgroundColor: AppColors.BrandColors.Gray,
    borderRadius: 100,
    margin: 10,
  },
});
