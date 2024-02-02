import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/router/header';
import {AppColors} from '../../utils/colors';
import Search from '../../assets/icons/Search/26x26.svg';
import FloatActionButton from '../../components/ui/floatActionButton';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';
import ContactCard from '../../components/contacts/contactCard';
import AddUser from '../../assets/icons/Add User/26x26.svg';
import {useNavigation} from '@react-navigation/native';
import {ADDCONTACT} from '../../utils/routes';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getContacts();
  }, [contacts]);

  const getContacts = async () => {
    const id = await DeviceInfo.getUniqueId();
    firestore()
      .collection(`Users/${id}/userContacts`)
      .get()
      .then(querySnapshot => {
        const contacts = [];
        querySnapshot.forEach(documentSnapshot => {
          contacts.push({
            id: documentSnapshot.id,
            name: documentSnapshot.data().name,
            surname: documentSnapshot.data().surname,
            status: documentSnapshot.data().status,
            lastSeen: documentSnapshot.data().lastSeen,
          });
        });
        setContacts(contacts);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={<Text style={{fontSize: 20}}>Contacts</Text>}
        right={
          <Pressable>
            <Search />
          </Pressable>
        }
      />

      <FlatList
        data={contacts}
        renderItem={item => <ContactCard item={item.item} />}
      />
      <FloatActionButton
        onPress={() => navigation.navigate(ADDCONTACT)}
        icon={<AddUser />}
      />
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.NeutralColors.White,
  },
});
