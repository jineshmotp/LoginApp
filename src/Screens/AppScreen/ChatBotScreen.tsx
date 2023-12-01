import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../Components/Header';

import { colors } from '../../Constants/colors';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-elements';

const ChatBotScreen: React.FC = () => {
  const navigation = useNavigation();

  const LogoutBtnPress = () => {
    navigation.navigate('AuthStack');
  };

  const BackBtnPress = () => {
    navigation.goBack();
  };


  return (
    <ImageBackground source={require('../../Images/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.HeaderView}>
        <Header LogoutBtnPress={LogoutBtnPress} BackBtnPress={BackBtnPress} />
      </View>

      <SafeAreaView style={styles.Container}>

        <Text style={{ color:colors.white }}>ChatBot screen</Text>
        
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  HeaderView: {
    flex: 0.1, // Adjust the flex value to allocate less space to the header
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'), // Add some padding to the Container
  },

  headerButtonView: {
    flexDirection: 'row',
    marginBottom: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textView: {
    flexDirection: 'column',
    marginBottom: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: wp('80%'),
    padding: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('2%'),
  },
  modalTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  subjectItem: {
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  closeButton: {
    fontSize: wp('4%'),
    color: 'blue',
    marginTop: hp('2%'),
  },
  submitButton: {
    width: wp('50%'),
    backgroundColor: colors.btnBackground,
    marginTop: hp('2%'), // Adjust the margin top for mobile
    marginBottom: hp('5%'), // Adjust the margin bottom for mobile
  },
});

export default ChatBotScreen;
