import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {SETUPNAME, TABMENU} from '../../utils/routes';
import firestore from '@react-native-firebase/firestore';
import Camera from '../../assets/icons/Camera/26x26.svg';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SetupPhoto = props => {
  const {phone, name, surname} = props.route.params;
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);
  const [id, setId] = useState(null);

  const getDeviceInfo = async () => {
    const id = await DeviceInfo.getUniqueId();
    setId(_prev => id);
  };

  useEffect(() => {
    getDeviceInfo();
  }, []);

  const storeData = async value => {
    console.log('ValueDegeri', value);
    try {
      await AsyncStorage.setItem('isLogin', value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const userRegister = () => {
    const form = {
      id: id,
      name,
      surname,
      phone,
      photo: photo || '',
      status: true,
    };
    firestore()
      .collection('Users')
      .doc(id)
      //kendi unique id miz ile '.doc(id)' ile ekleme yaptigimiz icin .set() kullandik / Auto-ID kullanicaksak .add() kullanmaliyiz
      .set(form)
      .then(() => {
        Alert.alert('User added!', 'Success!');
        storeData('true');
        navigation.navigate(TABMENU);
      })
      .catch(() => {
        console.log('User-add Fail!');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text={`Add your photo`} />
        <SectionDescription text={`Get more people to know you better.`} />
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: AppColors.NeutralColors.Gray,
            borderRadius: 1000,
            padding: 50,
            borderStyle: 'dashed',
          }}>
          <Camera />
        </TouchableOpacity>
        <Text style={{marginVertical: 10}}>Upload</Text>
      </View>
      <View>
        <Button title={'Next'} size={'medium'} onPress={() => userRegister()} />
      </View>
    </View>
  );
};

export default SetupPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BrandColors.White,
    padding: 30,
  },
  header: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  body: {flex: 3, paddingTop: 30, alignItems: 'center'},
});
