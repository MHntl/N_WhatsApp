import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CALL, CONTACTS, MASSAGES, PROFILE} from '../utils/routes';
import Messages from '../screens/message';
import Contacts from '../screens/contacts';
import Call from '../screens/calls';
import Profile from '../screens/profile';
import {AppColors} from '../utils/colors';
import MassageIcon from '../assets/icons/Message/26x26.svg';
import ContactsIcon from '../assets/icons/Users/26x26.svg';
import CallIcon from '../assets/icons/Phone Call/26x26.svg';
import ProfileIcon from '../assets/icons/User/26x26.svg';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === MASSAGES) {
            return <MassageIcon />;
          } else if (route.name === CONTACTS) {
            return <ContactsIcon />;
          } else if (route.name === CALL) {
            return <CallIcon />;
          } else if (route.name === PROFILE) {
            return <ProfileIcon />;
          }
        },
        tabBarActiveTintColor: AppColors.NeutralColors.Black,
        tabBarInactiveTintColor: AppColors.NeutralColors.Gray,
        headerShown: false,
      })}>
      <Tab.Screen name={MASSAGES} component={Messages} />
      <Tab.Screen name={CONTACTS} component={Contacts} />
      <Tab.Screen name={CALL} component={Call} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
