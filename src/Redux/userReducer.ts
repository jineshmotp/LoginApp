// src/Redux/userReducer.ts
import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL, 

  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,


  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT,

  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_FAIL,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_RESET,

} from './userConstants';

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;

 //#######################33

  socialLoginLoading:boolean;
  socialLoginerror: string | null;
  socialLoginData:null | [],

 //#########################

  userIndividualLoading:boolean;
  userIndividualerror:string | null;
  userIndividualData:null | [],
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,

 //#############################

  socialLoginLoading:false,
  socialLoginerror: null,
  socialLoginData:null,

  //########################

  userIndividualLoading:false,
  userIndividualerror:null,
  userIndividualData:null,

};

//###################### userSocialLoginReducer #############################

export const userSocialLoginReducer = (state = initialState, action) => {
  switch (action.type) {

    case SOCIAL_LOGIN_REQUEST:
      return { ...state, socialLoginLoading: false, socialLoginerror: null };    
    case SOCIAL_LOGIN_SUCCESS: 
      return { ...state, socialLoginData: action.payload, socialLoginLoading: false, socialLoginerror: null };
    case SOCIAL_LOGIN_FAIL:
     return { ...state, socialLoginData:null, socialLoginLoading: false, socialLoginerror: action.payload  };
    case SOCIAL_LOGIN_RESET:
        return { ...state, socialLoginData:null, socialLoginLoading: false, socialLoginerror: null  };

    default:
      return state;
  }

};

