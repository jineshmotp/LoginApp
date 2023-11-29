import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const isTablet = (screenWidth: number): boolean => {
  // Adjust the threshold based on your tablet detection criteria
  const tabletThreshold = 600;
  return screenWidth >= tabletThreshold;
};

export default isTablet;
