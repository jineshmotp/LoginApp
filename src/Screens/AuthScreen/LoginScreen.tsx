import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image,ImageBackground,Text,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonInput from '../../Components/ButtonInput';
import { colors } from '../../Constants/colors';
import styles from './style';

import Label from '../../Components/Label';

import Input from '../../Components/Input';

import Toast from 'react-native-root-toast';


import { useDispatch, useSelector } from 'react-redux';
import { userLoginaction,userAnonymousaction } from '../../Redux/userActions';

import { useRoute, useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const {userIdentificationData,userIdentificationLoading,userIdentificationerror } = userLogin;


  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
 
  
  const gotoHomeScreen = async() => {

    navigation.navigate('BottomTabNav');

  };



  


 
  const OnchangeEmail = (item) => {
   setEmail(item);
  };

  const OnchangePassword = (item) => {
    setPassword(item);
  };

  const gotoLogin = async() => {

    if(!email || !password )
    {

      let message = 'Enter all fields';

      Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        textStyle: {
          fontSize: wp('4%'), // Adjust font size based on screen width
        },
      });
 

    }
    else
    {

      let userdata = {
        email:email,
        password:password 
      }

      await dispatch(userLoginaction(userdata));


    }

  };

 

  const loginasGuest = async() => {

    await dispatch(userAnonymousaction());
    
  };

  const gotoRegisterScreen = () => {
    navigation.navigate('RegisterScreen');
  };



  const gotoSocialLogin = async() => {
  
  };

  const gotoForgotPassword = () => {
    
  };


  // useEffect(() => {
  //   if(userIdentificationData != null)
  //   {  
  //      console.log('Registration successsfull',userIdentificationData) ;  
  //      navigation.navigate('BottomTabNav');
  //   } 
  // }, [userIdentificationData]);


  return (
    <ImageBackground source={require('../../Images/bg.jpg')} style={styles.container}>
     
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

      


      <Input label="Email" secure={false} iconName="no" onChangeText={OnchangeEmail} />
     
     <Input 
            label="Password" 
            secure={true} 
            iconName="lock" 
            iconNametwo="eye" 
            onChangeText={OnchangePassword}
            />

        <View style={styles.signinView}>
           

            <TouchableOpacity onPress={gotoForgotPassword} style={styles.forgotPasswordText} >
              <Label textval="Forgot password ?" styless={{ color: colors.white, fontSize: wp('3.8%') }} />
            </TouchableOpacity>

            <ButtonInput
              styless={{ width: wp('28%'), backgroundColor: colors.btnBackground }}
              contentStyle={{ height: hp('7%') }}
              labelStyle={{ fontSize: hp('2.5%'), color: colors.fontColor, fontWeight: 'bold' }}
              onPress={gotoLogin}
              label="Sign In"
              iconP="no"
            />
       </View> 

     
         
      <ButtonInput
        styless={{ width: wp('80%'), backgroundColor: colors.btnBackground }}
        contentStyle={{ height: hp('7%') }}
        labelStyle={{ fontSize: hp('2.5%'), color: colors.fontColor, fontWeight: 'bold' }}
        onPress={gotoHomeScreen}
        label="Login with Gmail"
      />

            <TouchableOpacity onPress={gotoRegisterScreen} style={styles.otherLabel} >
              <Label textval="Sign Up" styless={{ color: colors.white, fontSize: wp('3.8%') }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={loginasGuest} style={styles.otherLabel}  >
              <Label textval="Anonymous Sign Up" styless={{ color: colors.white, fontSize: wp('3.8%') }} />
            </TouchableOpacity>

    </ImageBackground>
  );
};

export default LoginScreen;
