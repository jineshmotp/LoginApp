import React from 'react';
import { TouchableOpacity, StyleSheet,ActivityIndicator,View,Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
interface ButtonInputProps {
  styless?: object; // Custom styles for the button container
  contentStyle?: object; // Custom styles for the button content
  labelStyle?: object; // Custom styles for the button label
  onPress: () => void; // Function to execute on button press
  label: string; // Button label
}

const ButtonInput: React.FC<ButtonInputProps> = ({ styless, contentStyle, labelStyle, onPress, label }) => {
  return (
    <View style={styles.buttonContainer}> 
      
      <TouchableOpacity onPress={onPress} style={[styles.button, styless, contentStyle]}>
      
          <View style={styles.iconContainer}>  
          
            <Icon name='google' size={wp('5%')} color={colors.white} style={styles.icon} />
         </View>
         <Text style={[styles.buttonLabel, labelStyle]}>{label}</Text> 
      </TouchableOpacity>       
   </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: hp('4%'),
    marginTop: hp('4%'),
  },
  button: {
    flexDirection:'row',
    backgroundColor: 'blue',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
  },
  iconContainer: {
    width: wp('10%'), // Adjust the icon container width as needed
    height: wp('10%'), // Adjust the icon container height as needed
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent, // Change this to the desired background color
    borderRadius: wp('20%') / 2, // Make the icon container rounded
  },
  icon: {
    color: colors.white,
  },
  spaceBetween: {
    marginRight: wp('5%'), // Adjust the space between buttons as needed
  },
});

export default ButtonInput;
