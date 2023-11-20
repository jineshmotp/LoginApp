import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Constants/colors';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Left Side - Logo */}
      <View style={styles.leftContainer}>
        <Image
          source={require('../../Images/header-image.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Right Side - Button Icons */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button}>
          <MIcon name="account-voice" size={wp('5%')} color={colors.primary} style={styles.circularIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MIcon name="whatsapp" size={wp('5%')} color={colors.primary} style={styles.circularIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="file-circle-question" size={wp('5%')} color={colors.primary} style={styles.circularIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    backgroundColor: colors.white,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: wp('15%'),
    height: hp('5%'),
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: wp('5%'), // Half of the desired button size for a circular shape
    borderWidth: 1, // Adjust the border width as needed
    borderColor: colors.secondary, // Set the border color
    padding: wp('2%'), // Adjust padding as needed
    marginRight: wp('3%'), // Add margin between the buttons
  },
  circularIcon: {
    borderRadius: wp('5%'), // Additional border radius for circular shape
    overflow: 'hidden', // Ensure the border radius is applied
  },
});

export default Header;
