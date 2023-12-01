import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import ChatBotStack from './ChatBotStack';
import CounselingStack from './CounselingStack';
import SearchStack from './SearchStack';

import { colors } from '../Constants/colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HomeIcon from '../Images/home.png';
import SearchIcon from '../Images/search.png';
import ChatIcon from '../Images/chatboat.png';
import CounselingIcon from '../Images/counseling.png';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const iconSize = wp('15%'); // Adjust the percentage for the desired size

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderColor: colors.transparent,
          backgroundColor: colors.transparent,
          height: hp('8%'), // Adjust the percentage for the desired height
        },
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={HomeIcon} style={[styles.icon, {  width: iconSize, height: iconSize }]} />
          ),
        }}
      />

<Tab.Screen
        component={SearchStack}
        name="Search"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={SearchIcon} style={[styles.icon, { width: iconSize, height: iconSize }]} />
          ),
        }}
      />

<Tab.Screen
        component={CounselingStack}
        name="Counseling"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={CounselingIcon} style={[styles.icon, { width: iconSize, height: iconSize }]} />
          ),
        }}
      />

        <Tab.Screen
        component={ChatBotStack}
        name="ChatBot"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={ChatIcon} style={[styles.icon, { width: iconSize, height: iconSize }]} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    // width and height are set dynamically in the options
  },
});

export default BottomTabNav;
