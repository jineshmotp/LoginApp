// ResponsiveToast.tsx
import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Toast from 'react-native-root-toast';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Constants/colors';

interface ResponsiveToastProps {
  message: string;
}

const ResponsiveToast: React.FC<ResponsiveToastProps> = ({ message }) => {
  useEffect(() => {
    // Automatically show the toast after 10 seconds
    const timer = setTimeout(() => {
      showToast();
    }, 10000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  const showToast = () => {
    Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };

  return (
    <View style={styles.toastContainer}>
      <Text style={styles.toastText} onPress={showToast}>
        Show Toast
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: colors.transparent,
    padding: wp('3%'),
    borderRadius: wp('2%'),
    position: 'absolute',
    bottom: hp('5%'),
    alignSelf: 'center',
    zIndex: 999,
  },
  toastText: {
    color: 'white',
    fontSize: wp('4%'),
  },
});

export default ResponsiveToast;
