import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';

const SectionDescription = props => {
  const {text} = props;
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SectionDescription;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 14,
    color: AppColors.NeutralColors.Gray,
    textAlign: 'center',
    margin: 10,
  },
});
