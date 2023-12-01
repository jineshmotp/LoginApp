import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  userSocialLoginReducer,
  userLoginReducer,
  } from './src/Redux/userReducer';

  const rootReducer = combineReducers({ 
    userLogin:userLoginReducer,
    userSocialLogin:userSocialLoginReducer, 
  });  

  const middleware = [thunk];

// Get user details from AsyncStorage
const getUserDetails = async () => {
  const userDetails = await AsyncStorage.getItem('userDetails');
  return JSON.parse(userDetails) || null;
};

// Async function to get initial state
const getInitialState = async () => ({
  userLoginuserRegister: {
    userIdentificationData: await getUserDetails(),
    userIdentificationLoading: false,
    userIdentificationerror: null,
  },
  });
  
  // Create the store using initial state
  const initializeStore = async () => {
    const initialState = await getInitialState();
    const store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    );
    return store;
  };
  
  export default initializeStore;
  