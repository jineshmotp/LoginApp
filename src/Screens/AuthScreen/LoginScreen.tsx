import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonInput from '../../Components/ButtonInput';
import { colors } from '../../Constants/colors';
import styles from './style';


import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { userSocialLoginaction } from '../../Redux/userActions';

import { useRoute, useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const userSocialLogin = useSelector(state => state.userSocialLogin)
  const {socialLoginData,socialLoginLoading,socialLoginerror } = userSocialLogin;

  const gotoHomeScreen = async() => {

    navigation.navigate('HomeScreen');

  };

  const gotoSocialLogin = async() => {


    try {
   // dispatch(userSocialLoginaction());
   console.log('pressed');
   GoogleSignin.configure({     
    offlineAccess:false,
    webClientId: '1023632021975-j0tik4grlfpq243dbonrnj68i76d39tt.apps.googleusercontent.com',
    scopes:['profile','email']
   });
  

   await GoogleSignin.hasPlayServices();
   const userInfo = await GoogleSignin.signIn();
   
   const {idToken} = await GoogleSignin.signIn();
   const googleCredentials = await auth.GoogleAuthProvider.credential(idToken);
   await auth().signInWithCredential(googleCredentials);
          
   console.log('Google signin data : ',userInfo);
  
  } catch (error) {
    
    //dispatch({ type: SOCIAL_LOGIN_FAIL,payload: error.message  });
    console.log('Google signin error : ',error.message);             
}

  };


  // useEffect(() => {
  //   if(socialLoginData !== null)
  //   {  
  //     console.log('outfrom frond end :',socialLoginData) ;  
  //      navigation.navigate('AppScreen');
  //   } 
  // }, [socialLoginData,socialLoginLoading]);




  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Images/logo.png')}
          style={{
            width: wp('80%'), // 80% of the screen width
            height: hp('20%'), // 20% of the screen height
            resizeMode: 'contain', // Adjust the resizeMode as needed
          }}
        />
      </View>

      <ButtonInput
        styless={{ width: wp('80%'), backgroundColor: colors.primary }}
        contentStyle={{ height: hp('7%') }}
        labelStyle={{ fontSize: hp('2.5%'), color: colors.white, fontWeight: 'bold' }}
        onPress={gotoHomeScreen}
        label="GOOGLE LOGIN"
      />

    </View>
  );
};

export default LoginScreen;
