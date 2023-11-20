// src/Redux/userActions.ts
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL, 

 
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT,
  
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,

  USER_INDIVIDUAL_REQUEST,
  USER_INDIVIDUAL_FAIL,
  USER_INDIVIDUAL_SUCCESS,
  USER_INDIVIDUAL_RESET,

  USER_UPDATE_ONLINE_STATUS,

  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_FAIL,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_RESET,


} from './userConstants';
import { Alert } from 'react-native';

//######################### Updateuser Token ################################


export const userSocialLoginaction = () => async (dispatch) => {

  try {
    
    

    GoogleSignin.configure({     
      offlineAccess:false,
      webClientId: '1023632021975-4rndlinpopde42k8bv9th0uvdv5334k8.apps.googleusercontent.com',
      scopes:['profile','email']
     });
  

     dispatch({ type: SOCIAL_LOGIN_REQUEST });

     await GoogleSignin.hasPlayServices();
     const userInfo = await GoogleSignin.signIn();
     
     const {idToken} = await GoogleSignin.signIn();
     const googleCredentials = await auth.GoogleAuthProvider.credential(idToken);
     awaitauth().signInWithCredential(googleCredentials);

            
     console.log('Google signin data : ',userInfo);
     dispatch({ type: SOCIAL_LOGIN_SUCCESS,payload: userInfo  });
 
   } catch (error) {
    
       dispatch({ type: SOCIAL_LOGIN_FAIL,payload: error.message  });
       console.log('Google signin error : ',error);             
   }

};

export const userSocialLogoutaction = () => async (dispatch) => {
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();

}