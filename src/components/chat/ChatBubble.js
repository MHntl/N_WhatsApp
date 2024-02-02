import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';

const ChatBubble = ({item}) => {
  return (
    <View
      style={[
        item.item.type === 'gonder'
          ? {alignSelf: 'flex-end'}
          : {alignSelf: 'flex-start'},
        // {
        //   shadowColor: '#000',
        //   shadowOffset: {
        //     width: 0,
        //     height: 5,
        //   },
        //   shadowOpacity: 0.36,
        //   shadowRadius: 6.68,
        //   elevation: 11,
        // },
      ]}>
      <Text
        style={[
          {
            padding: 10,
            margin: 5,
            borderRadius: 10,
          },
          item.item.type === 'gonder'
            ? {backgroundColor: AppColors.AccentColors.LightGreen}
            : {
                backgroundColor: AppColors.NeutralColors.GrayLight,
              },
        ]}>
        {item.item.value}
      </Text>
      <Text
        style={{
          fontSize: 12,
          alignSelf: 'flex-end',
        }}>
        {item.item.time}
      </Text>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({});
