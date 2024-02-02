import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {height} from '../../utils/constant';
import Send from '../../assets/icons/Send/26x26.svg';
import Smile from '../../assets/icons/Smile/26x26.svg';
import {AppColors} from '../../utils/colors';

const MassageBox = props => {
  return (
    <View style={styles.container}>
      <View>
        <Pressable>
          <Smile />
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <TextInput
          value={props.text}
          {...props}
          placeholder="Text"
          style={{
            minHeight: 40,
            padding: 10,
            borderColor: AppColors.NeutralColors.Gray,
            borderWidth: 1,
            marginLeft: 5,
            borderRadius: 10,
          }}
        />
      </View>
      <View>
        <Pressable {...props}>
          <Send />
        </Pressable>
      </View>
    </View>
  );
};

export default MassageBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    minHeight: height / 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.NeutralColors.White,
  },
});
