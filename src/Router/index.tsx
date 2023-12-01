import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Text } from 'react-native';
import BottomTabNav from './BottomTabNav';
import AuthStack from './AuthStack';
// import LoginScreen from '../Screens/AuthScreen/LoginScreen';
// import RegisterScreen from '../Screens/AuthScreen/RegisterScreen';

import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Router = () => {


    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userIdentificationData, userIdentificationLoading, userIdentificationerror } = userLogin;

  return (
    <NavigationContainer>
    
    

          {userIdentificationData === null ? 
          (
              <AuthStack />
            
          )
          :
          (

            <Stack.Navigator headerMode="none">
            <Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{ headerShown: false }} />
            </Stack.Navigator>
           
            
           
          )

          }

         
         
     
      
         
    
    </NavigationContainer>
  );





};

export default Router;
