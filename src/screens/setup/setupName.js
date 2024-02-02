import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {SETUPPHOTO, VERIFICATIONPHONENUMBER} from '../../utils/routes';
import Input from '../../components/ui/input';
import User from '../../assets/icons/User/26x26.svg';

const SetupName = props => {
  const {phone} = props.route.params;
  const navigation = useNavigation();
  const [name, setName] = useState('Muhammet');
  const [surname, setSurname] = useState('H');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text={`Create your name`} />
        <SectionDescription text={`Get more people to know your name.`} />
      </View>
      <View style={styles.body}>
        <Input
          placeholder={'Name'}
          icon={<User />}
          onChangeText={text => setName(text)}
          defaultValue={name}
        />
        <Input
          placeholder={'Surname'}
          icon={<User />}
          onChangeText={text => setSurname(text)}
          defaultValue={surname}
        />
      </View>
      <View>
        <Button
          title={'Next'}
          size={'medium'}
          onPress={() =>
            navigation.navigate(SETUPPHOTO, {
              phone: phone,
              name: name,
              surname: surname,
            })
          }
        />
      </View>
    </View>
  );
};

export default SetupName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BrandColors.White,
    padding: 30,
  },
  header: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  body: {flex: 3, paddingTop: 30},
});
