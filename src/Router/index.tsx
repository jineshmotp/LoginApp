import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View,Text } from 'react-native'
import HomeScreen from '../Screens/AppScreen/HomeScreen'
import LoginScreen from '../Screens/AuthScreen/LoginScreen'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
     
        <Stack.Navigator headerMode="none">
         
          <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
     
    </NavigationContainer>
  )
}

export default Router;