import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatBotScreen from '../Screens/AppScreen/ChatBotScreen';

const ChatStack = createNativeStackNavigator();

const ChatBotStack = () => {
  return (
    <ChatStack.Navigator >
      <ChatStack.Screen name="ChatBotScreen" options={{ headerShown: false }} component={ChatBotScreen} />  
    </ChatStack.Navigator>
   
  );
}

export default ChatBotStack;