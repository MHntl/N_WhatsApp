import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import ImagePicker from 'react-native-image-crop-picker';

const SetupPhoto = props => {
  const {phone, name, surname} = props.route.params;
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);
  const [id, setId] = useState(null);

  const getDeviceInfo = async () => {
    const id = await DeviceInfo.getUniqueId();
    setId(_prev => id);
  };

  const selectImageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      //base64 formatina (fotoyu string hale getirdik) cevirmek icin includeBase64: true,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      let base64Photo = `data:${image.mime};base64,${image.data}`;
      //console.log(image);
      //setPhoto(image.path);
      setPhoto(base64Photo);
    });
  };
  //simulatorde kamera acilmiyor
  const selectImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setPhoto(image.path);
    });
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
          onPress={() => selectImageFromLibrary()}
          style={[
            {
              borderWidth: 1,
              borderColor: AppColors.NeutralColors.Gray,
              borderRadius: 1000,
              borderStyle: 'dashed',
            },
            photo ? {padding: 0} : {padding: 50},
          ]}>
          {photo ? (
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 1000,
                resizeMode: 'cover',
              }}
              source={{uri: photo}}
            />
          ) : (
            <Camera />
          )}
        </TouchableOpacity>
        <Text style={{marginVertical: 10}}>Upload from gallery</Text>
        <Text>or</Text>
        <TouchableOpacity onPress={() => selectImageFromCamera()}>
          <Text style={{fontSize: 16, color: 'blue'}}>Use camera</Text>
        </TouchableOpacity>
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
