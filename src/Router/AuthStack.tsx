import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/AuthScreen/LoginScreen';
import RegisterScreen from '../Screens/AuthScreen/RegisterScreen';

const AuStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuStack.Navigator >
      <AuStack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />  
      <AuStack.Screen name="RegisterScreen" options={{ headerShown: false }} component={RegisterScreen} /> 
    </AuStack.Navigator>
   
  );
}

export default AuthStack;