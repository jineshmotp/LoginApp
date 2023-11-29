import React from 'react';
import { StyleSheet, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import isTablet from '../../Utility/isTablet';
import { Text } from 'react-native-elements';

const screenWidth = Dimensions.get('window').width;
const tablet = isTablet(screenWidth);
const iconSize = tablet ? wp('5%') : wp('7%');

const Header = ({ LogoutBtnPress, BackBtnPress }) => {
  const logoImageWidth = tablet ? wp('50%') : wp('40%');
  const logoImageHeight = tablet ? hp('20%') : hp('15%');
  const headerContainerPadding = tablet ? wp('10%') : wp('5%');
  const backButtonTextStyle = tablet ? styles.backButtonTextTablet : styles.backButtonTextMobile;

  return (
    <View style={[styles.headerContainer, { paddingVertical: headerContainerPadding }]}>
      <TouchableOpacity style={styles.notificationContainer} onPress={LogoutBtnPress}>
        <SimpleLineIcons name="logout" size={iconSize} color={colors.black} />
      </TouchableOpacity>
      <View style={styles.logoTextContainer}>
        <Image style={[styles.logoImage, { width: logoImageWidth, height: logoImageHeight }]} source={require("../../Images/logo.png")} />
      </View>
      <TouchableOpacity style={styles.notificationContainer} onPress={BackBtnPress}>
        <Ionicons name="chevron-back-outline" size={iconSize} color={colors.black} ></Ionicons>
        <Text style={backButtonTextStyle}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },

  logoTextContainer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationContainer: {
    flexDirection: 'row',
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImage: {
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.transparent,
  },

  backButtonTextMobile: {
    color:colors.black,
    fontSize: wp('4%'),
    marginLeft: wp('1%'),
  },

  backButtonTextTablet: {
    color:colors.black,
    fontSize: wp('5%'), // Adjust the font size as needed for tablet
    marginLeft: wp('2%'), // Adjust the margin left as needed for tablet
  },
});
