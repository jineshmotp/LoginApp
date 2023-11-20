import React from 'react';
import {StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Constants/colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: wp('5%'), // 5% of the screen width
      },
      imageContainer: {
        alignItems: 'center', // Align the image in the center vertically
      },
      inputContainer: {
        marginBottom: hp('2%'), // 2% of the screen height
      },
      loginButton: {
        marginTop: hp('2%'), // 2% of the screen height
      },
      socialContainer: {
        marginTop: hp('2%'), // 2% of the screen height
      },
  
  });
  
  export default styles;