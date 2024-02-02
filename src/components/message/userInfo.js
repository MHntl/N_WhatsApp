import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Avatar from '../ui/avatar';
import {AppColors} from '../../utils/colors';

const UserInfo = ({item}) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Avatar item={item} />
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingVertical: 5}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>
          {item.name} {item.surname}
        </Text>
        {/* <Text style={{fontSize: 14, color: AppColors.NeutralColors.Gray}}>

          {item.lastSeen}
        </Text> */}
        {item.status ? (
          <Text style={{fontSize: 14, color: AppColors.NeutralColors.Gray}}>
            Last seen today {item.lastSeen}
          </Text>
        ) : (
          <Text style={{color: AppColors.AccentColors.Green}}>Online</Text>
        )}
      </View>
    </Pressable>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
