import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/router/header';
import {AppColors} from '../../utils/colors';
import ContactCard from '../../components/contacts/contactCard';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getMyProfile();
  }, []);
  const getMyProfile = async () => {
    //get DeviceID
    const id = await DeviceInfo.getUniqueId();

    //get Firestore Data
    firestore()
      .collection('Users')
      .doc(id)
      .get()
      .then(documentSnapshot => {
        //console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          //console.log('User data: ', documentSnapshot.data());
          setUser(documentSnapshot.data());
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header left={<Text style={{fontSize: 20}}>My profile</Text>} />
      {user && <ContactCard item={user} />}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.NeutralColors.White},
});
