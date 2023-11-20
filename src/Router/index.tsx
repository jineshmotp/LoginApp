import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View,Text } from 'react-native'
import AppScreen from '../Screens/AppScreen'
import AuthScreen from '../Screens/AuthScreen'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
     
        <Stack.Navigator headerMode="none">
         
          <Stack.Screen name="AuthScreen" component={AuthScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="AppScreen" component={AppScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
     
    </NavigationContainer>
  )
}

export default Router;