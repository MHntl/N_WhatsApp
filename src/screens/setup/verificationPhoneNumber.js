import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {SETUPNAME, VERIFICATIONPHONENUMBER} from '../../utils/routes';
import Input from '../../components/ui/input';
import Region from '../../assets/icons/Region/26x26.svg';
import Phone from '../../assets/icons/Phone/26x26.svg';

const VerificationPhoneNumber = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('Turkey (+90)');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text={`Enter your phone number`} />
        <SectionDescription
          text={`Please confirm your region and enter your phone number.`}
        />
      </View>
      <View style={styles.body}>
        <Input
          editable={false}
          placeholder={'Select Country'}
          keyboardType={'number-pad'}
          icon={<Region />}
          defaultValue={countryCode}
        />
        <Input
          placeholder={'Phone Number'}
          keyboardType={'number-pad'}
          defaultValue={phone}
          onChangeText={text => setPhone(text)}
          icon={<Phone />}
        />
      </View>
      <View>
        <Button
          title={'Continue'}
          size={'medium'}
          onPress={() => navigation.navigate(SETUPNAME, {phone: phone})}
        />
      </View>
    </View>
  );
};

export default VerificationPhoneNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BrandColors.White,
    padding: 30,
  },
  header: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  body: {flex: 3, paddingTop: 30},
});
