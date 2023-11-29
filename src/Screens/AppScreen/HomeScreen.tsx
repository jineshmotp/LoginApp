import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../Components/Header';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const LogoutBtnPress = () => {
    navigation.navigate('LoginScreen');
  };

  const BackBtnPress = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../Images/bg.jpg')}
      style={styles.backgroundImage}
    >
      <Header LogoutBtnPress={LogoutBtnPress} BackBtnPress={BackBtnPress} />
      <View style={styles.container}>
        {/* Your other components go here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'), // Adjust the marginTop value as needed
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default HomeScreen;
