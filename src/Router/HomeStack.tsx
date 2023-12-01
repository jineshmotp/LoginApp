import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/AppScreen/HomeScreen';

const HStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HStack.Navigator >
      <HStack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />  
    </HStack.Navigator>
   
  );
}

export default HomeStack