import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/router/header';
import {AppColors} from '../../utils/colors';
import ArrowLeft from '../../assets/icons/Arrow Left/26x26.svg';
import More from '../../assets/icons/More/26x26.svg';
import {useNavigation} from '@react-navigation/native';
import UserInfo from '../../components/message/userInfo';
import MassageBox from '../../components/message/massageBox';
import {height, width} from '../../utils/constant';
import ChatBubble from '../../components/chat/ChatBubble';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';
import uuid from 'react-native-uuid';

const Chat = props => {
  const item = props.route.params.item;
  const navigation = useNavigation();
  const [massages, setMassages] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    getMassages();
  }, [text]);

  const getMassages = async () => {
    const id = await DeviceInfo.getUniqueId();
    firestore()
      .collection(`Users/${id}/userContacts/${item.id}/Massages`)
      .get()
      .then(querySnapshot => {
        const massagesData = [];
        querySnapshot.forEach(documentSnapshot => {
          massagesData.push({
            id: documentSnapshot.data().id,
            value: documentSnapshot.data().value,
            time: documentSnapshot.data().time,
            type: documentSnapshot.data().type,
          });
        });
        massagesData.sort((a, b) => {
          const [saatA, dakikaA] = a.time.split(':').map(Number);
          const [saatB, dakikaB] = b.time.split(':').map(Number);
          if (saatA !== saatB) {
            return saatA - saatB;
          } else {
            return dakikaA - dakikaB;
          }
        });
        setMassages(massagesData);
      });
  };

  const sendMassages = async () => {
    const now = new Date();
    const saat = now.getHours();
    const dakika = now.getMinutes().toString().padStart(2, '0');
    // console.log(saat, ':', dakika);

    const id = await DeviceInfo.getUniqueId();
    firestore()
      .collection(`Users/${id}/userContacts/${item.id}/Massages`)
      .add({
        id: uuid.v4(),
        value: text,
        time: `${saat}:${dakika}`,
        type: 'gonder',
      })
      .then(() => {
        console.log('Text added!');
        setText('');
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
        body={<UserInfo item={item} />}
        right={
          <Pressable>
            <More />
          </Pressable>
        }
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            zIndex: 20,
            marginTop: 10,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={massages}
            keyExtractor={item => item.id}
            renderItem={item => <ChatBubble item={item} />}
          />
        </View>
        <View style={{zIndex: -10, position: 'absolute'}}>
          <Image
            source={require('../../assets/images/WhatsApp.jpeg')}
            resizeMode="stretch"
            style={{flex: 1, width: width, height: height - 200}}
          />
        </View>
      </View>
      <View>
        <MassageBox
          value={text}
          onChangeText={text => setText(text)}
          onPress={() => sendMassages()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.NeutralColors.White},
});
