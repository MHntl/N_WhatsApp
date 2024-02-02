import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/app/onBoarding';
import {
  ADDCONTACT,
  CHAT,
  ONBOARDING,
  SETUPNAME,
  SETUPPHOTO,
  TABMENU,
  VERIFICATIONPHONENUMBER,
} from '../utils/routes';
import VerificationPhoneNumber from '../screens/setup/verificationPhoneNumber';
import SetupName from '../screens/setup/setupName';
import SetupPhoto from '../screens/setup/setupPhoto';
import TabNavigator from './tabNavigator';
import AddContact from '../screens/contacts/addContact';
import Chat from '../screens/chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();
function RootNavigator() {
  const [isLogin, setIsLogin] = useState(true);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLogin');
      if (value !== null) {
        // value previously stored
        setIsLogin(value);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [isLogin]);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isLogin ? TABMENU : ONBOARDING}>
      <Stack.Screen name={ONBOARDING} component={OnBoarding} />
      <Stack.Screen
        name={VERIFICATIONPHONENUMBER}
        component={VerificationPhoneNumber}
      />
      <Stack.Screen name={SETUPNAME} component={SetupName} />
      <Stack.Screen name={SETUPPHOTO} component={SetupPhoto} />
      <Stack.Screen name={ADDCONTACT} component={AddContact} />
      <Stack.Screen name={TABMENU} component={TabNavigator} />
      <Stack.Screen name={CHAT} component={Chat} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
