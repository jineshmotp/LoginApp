// src/Redux/userActions.ts
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL, 


  ANONYMOUS_REQUEST, 
  ANONYMOUS_SUCCESS, 
  ANONYMOUS_FAIL, 
  ANONYMOUS_RESET,


 
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_RESET,
  
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,


  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_FAIL,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_RESET,


} from './userConstants';
import { Alert } from 'react-native';

//######################### Updateuser Token ################################

export const userRegisteraction = (data) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });

  try {
    const userCredential = await auth().createUserWithEmailAndPassword(data.email, data.password);

    let userDetails = {
      id : userCredential.user.uid,
      email: data.email,
    }

    console.log('User account created & signed in!');
    
    dispatch({ type: USER_REGISTER_SUCCESS, payload: userDetails });
    await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));

  } catch (error) {
    let errorMessage = 'An error occurred during user registration.';

    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'That email address is already in use!';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'That email address is invalid!';
    }

    console.error(error);
    dispatch({ type: USER_REGISTER_FAIL, payload: errorMessage });
  }
};


export const userLoginaction = (data) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const userCredential = await auth().signInWithEmailAndPassword(data.email, data.password);

    let userDetails = {
      id : userCredential.user.uid,
      email: data.email,
    }

    console.log('User account signed in successfully!');

    // You can dispatch USER_LOGIN_SUCCESS here if needed
    dispatch({ type: USER_LOGIN_SUCCESS, payload: userDetails });
    await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));

  } catch (error) {
    let errorMessage = 'An error occurred during user login.';

    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = 'Invalid email or password!';
    }

    console.error(error);

    dispatch({ type: USER_LOGIN_FAIL, payload: errorMessage });
  }
};


//################### Anonymous Login ######################################

export const userAnonymousaction = () => async (dispatch) => {

  dispatch({ type: ANONYMOUS_REQUEST });

  try {
    const userCredential = await auth().signInAnonymously();

    let userDetails = {
      id : userCredential.user.uid,
      email: 'Anonymous'
    }

    console.log('User account signed in successfully!');

    // You can dispatch USER_LOGIN_SUCCESS here if needed
    dispatch({ type: ANONYMOUS_SUCCESS, payload: userDetails });   

  } catch (error) {
    let errorMessage = 'An error occurred during user login.';

    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = 'Invalid email or password!';
    }

    console.error(error);

    dispatch({ type: ANONYMOUS_FAIL, payload: errorMessage });
  }

};


export const userLogoutaction = () => async (dispatch) => {

  
  dispatch({ type: USER_LOGOUT_REQUEST });

  try {
    await auth().signOut();
    await AsyncStorage.removeItem('userDetails'); // Assuming you store user details in AsyncStorage
    console.log('User signed out!');
    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: USER_LOGOUT_FAIL, payload: error.message });
  }
};

//###########################################################################

export const userSocialLoginaction = () => async (dispatch) => {

  // try {
    
    

  //   GoogleSignin.configure({     
  //     offlineAccess:false,
  //     webClientId: '1023632021975-4rndlinpopde42k8bv9th0uvdv5334k8.apps.googleusercontent.com',
  //     scopes:['profile','email']
  //    });
  

  //    dispatch({ type: SOCIAL_LOGIN_REQUEST });

  //    await GoogleSignin.hasPlayServices();
  //    const userInfo = await GoogleSignin.signIn();
     
  //    const {idToken} = await GoogleSignin.signIn();
  //    const googleCredentials = await auth.GoogleAuthProvider.credential(idToken);
  //    awaitauth().signInWithCredential(googleCredentials);

            
  //    console.log('Google signin data : ',userInfo);
  //    dispatch({ type: SOCIAL_LOGIN_SUCCESS,payload: userInfo  });
 
  //  } catch (error) {
    
  //      dispatch({ type: SOCIAL_LOGIN_FAIL,payload: error.message  });
  //      console.log('Google signin error : ',error);             
  //  }

};

export const userSocialLogoutaction = () => async (dispatch) => {
  // await GoogleSignin.revokeAccess();
  // await GoogleSignin.signOut();

}