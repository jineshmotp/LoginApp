import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../Screens/AppScreen/SearchScreen';


const SStack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <SStack.Navigator >
      <SStack.Screen name="SearchScreen" options={{ headerShown: false }} component={SearchScreen} />  
    </SStack.Navigator>
   
  );
}

export default SearchStack