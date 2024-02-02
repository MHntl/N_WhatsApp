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
import Edit from '../../assets/icons/Edit/26x26.svg';
import {massagesData} from '../../utils/mockData';
import MassageCard from '../../components/message/massageCardCard';
import firestore from '@react-native-firebase/firestore';

const Messages = () => {
  const [massages, setMassages] = useState([]);
  const getMassages = () => {
    firestore()
      .collection('Massages')
      .doc('sY9tR7IwA14RFaiMwKPg')
      .get()
      .then(documentSnapshot => {
        let userMassages = [];
        //console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          //console.log('User data: ', documentSnapshot.data());
          userMassages.push(documentSnapshot.data());
          setMassages(userMassages);
        }
      });
  };
  useEffect(() => {
    getMassages();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={<Text style={{fontSize: 20}}>Messages</Text>}
        right={
          <Pressable>
            <Search />
          </Pressable>
        }
      />

      <FlatList
        data={massages}
        renderItem={item => <MassageCard item={item.item} />}
      />
      <FloatActionButton icon={<Edit />} />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.NeutralColors.White,
  },
});
