import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CounselingScreen from '../Screens/AppScreen/CounselingScreen';

const CoStack = createNativeStackNavigator();

const CounselingStack = () => {
  return (
    <CoStack.Navigator >
      <CoStack.Screen name="CounselingScreen" options={{ headerShown: false }} component={CounselingScreen} />  
    </CoStack.Navigator>
   
  );
}

export default CounselingStack;