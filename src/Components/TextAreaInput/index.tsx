// TextArea.tsx

import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Constants/colors';



interface TextAreaProps {
  label: string;
  onChangeText?: (text: string) => void;
}

const TextAreaInput: FunctionComponent<TextAreaProps> = ({ label, onChangeText }) => {
  return (
    <View style={styles.textAreaContainer}>
      <View style={styles.labelContainer}>
       
      </View>
      <TextInput
        placeholder={label}
        placeholderTextColor={colors.white}
        multiline={true}
        style={styles.textArea}
        onChangeText={onChangeText}
        textAlignVertical="top" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textAreaContainer: {
    width: wp('80%'),
    height: hp('10%'), 
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    marginBottom: hp('2%'),
  },
  labelContainer: {
   
  },
  textArea: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: wp('4%'),
    color: colors.white,
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: 'top', 
  },
});

export default TextAreaInput;
