import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../ui/avatar';
import {AppColors} from '../../utils/colors';
import Badge from '../ui/badge';
import {useNavigation} from '@react-navigation/native';
import {CHAT} from '../../utils/routes';

const MassageCard = ({item}) => {
  const itemData = item;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHAT, {
          item: item,
        })
      }
      style={styles.container}>
      <View>
        <Avatar item={itemData} />
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingVertical: 5}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>
          {item.name} {item.surname}
        </Text>
        <Text style={{fontSize: 14, color: AppColors.NeutralColors.Gray}}>
          {item.value}
        </Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text
          style={{
            fontSize: 14,
            color: AppColors.NeutralColors.Gray,
            paddingRight: 10,
          }}>
          {item.time}
        </Text>
        {item.readMassage === 0 ? <View /> : <Badge count={item.readMassage} />}
      </View>
    </Pressable>
  );
};

export default MassageCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
