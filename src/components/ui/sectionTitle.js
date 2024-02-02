import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';

const SectionTitle = props => {
  const {text} = props;
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 22,
    fontWeight: '600',
    color: AppColors.NeutralColors.Black,
  },
});
