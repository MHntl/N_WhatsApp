import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/router/header';
import ArrowLeft from '../../assets/icons/Arrow Left/26x26.svg';
import Check from '../../assets/icons/Check/26x26.svg';
import {AppColors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../../components/ui/avatar';
import Input from '../../components/ui/input';
import User from '../../assets/icons/User/26x26.svg';
import Phone from '../../assets/icons/Phone/26x26.svg';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import DeviceInfo from 'react-native-device-info';

const AddContact = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState();
  const [photo, setPhoto] = useState(null);

  const AddContact = async () => {
    const form = {
      id: uuid.v4(),
      name,
      surname,
      phone,
      photo,
      status: true,
    };
    const id = await DeviceInfo.getUniqueId();
    firestore()
      .collection(`Users/${id}/userContacts`)
      .add(form)
      .then(() => {
        Alert.alert('User added!', 'Success!');
        navigation.goBack();
      })
      .catch(() => {
        console.log('User-add Fail!');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </Pressable>
        }
        body={<Text style={{fontSize: 20}}>Add contact</Text>}
        right={
          <Pressable onPress={() => AddContact()}>
            <Check />
          </Pressable>
        }
      />
      <View
        style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <Avatar name={name} surname={surname} />
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
        <Input
          placeholder={'Phone Number'}
          icon={<Phone />}
          onChangeText={text => setPhone(text)}
          defaultValue={phone}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.NeutralColors.White},
});
