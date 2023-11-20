import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonInput from '../../Components/ButtonInput';
import { colors } from '../../Constants/colors';
import styles from './style';

import ImageSlider from '../../Components/ImageSlider';
import Header from '../../Components/Header';


import { useDispatch, useSelector } from 'react-redux';
import { userSocialLogoutaction } from '../../Redux/userActions';

import { useRoute, useNavigation } from '@react-navigation/native';


const Dashboard: React.FC = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();


  const SocialLogoutPress = () => {
    dispatch(userSocialLogoutaction());
    
    navigation.navigate('AuthScreen');
   
  };
   
  const data = [
    { id: '1', uri: require('../../Images/scroll1.jpg') },
    { id: '2', uri: require('../../Images/scroll2.jpg') },
    { id: '3', uri: require('../../Images/scroll3.jpg') },
    { id: '4', uri: require('../../Images/scroll4.jpg') },
    { id: '5', uri: require('../../Images/scroll5.jpg') },
  ];


  return (
    <View >
       
       <Header />
       <ImageSlider data={data} />

    </View>
  );
};

export default Dashboard;
