import React, { FunctionComponent,useState } from 'react';
import { View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../Constants/colors';

interface InputProps {
  label: string;
  ability:boolean;
  emailtype:boolean;
  secure?: boolean; // Make secure prop optional
  iconName: string; // Corrected prop name to camelCase  
  onChangeText?: (text: string) => void; // Add this prop
}

const Input: FunctionComponent<InputProps> = ({ label,emailtype, secure, iconName,onChangeText }) => {
 
  const [isPasswordVisible, setPasswordVisible] = useState(!secure);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  
  return (
    <View style={styles.inputContainer}>

    {iconName !== 'no' && (
      
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={wp('5%')} color={colors.white} style={styles.icon} />
      </View>
      )}

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={label}   
          placeholderTextColor={colors.white}
          keyboardType= {emailtype ? 'email-address': 'default'}       
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
          theme={{ colors: { primary: 'transparent' } }}
          onChangeText={onChangeText}
          textAlignVertical="center" // Add this line
        />
      </View>
      
      {iconName !== 'no' &&  (
        <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
          <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={wp('5%')} color={colors.white} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('7%'),
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    marginBottom: hp('2%'),
  },
  iconContainer: {
    backgroundColor: colors.transparent,
    borderRadius: wp('2%'),
    padding: wp('2%'),
  },
  icon: {
    color: colors.white,
    backgroundColor:colors.transparent
  },
  inputWrapper: {
    flex: 1,
    marginLeft: wp('2%'),
    backgroundColor: 'transparent',
    borderRadius: wp('2%'),
    overflow: 'hidden',
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: wp('4%'),
    color: colors.white,
    paddingTop: 0, // Reset paddingTop
    paddingBottom: 0, // Reset paddingBottom
  },

});

export default Input;
