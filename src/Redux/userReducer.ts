// src/Redux/userReducer.ts
import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL, 
  USER_LOGIN_RESET,

  ANONYMOUS_REQUEST, 
  ANONYMOUS_SUCCESS, 
  ANONYMOUS_FAIL, 
  ANONYMOUS_RESET,


  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,


  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_RESET,

  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_FAIL,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_RESET,

} from './userConstants';

interface UserState {

 //#######################33

 userIdentificationData:null | [];
 userIdentificationLoading:boolean;
 userIdentificationerror:string | null;

 userAnonymousData:null | [];
 userAnonymousLoading:boolean;
 userAnonymouserror:string | null;


 userLogoutLoading:boolean;
 userLogouterror:string | null;

 //#########################

  socialLoginLoading:boolean;
  socialLoginerror: string | null;
  socialLoginData:null | [],

 
}

const initialState: UserState = {

  //##########################

 userIdentificationData:null,
 userIdentificationLoading:false,
 userIdentificationerror:null,


 userAnonymousData:null,
 userAnonymousLoading:false,
 userAnonymouserror:null,

 userLogoutLoading:false,
 userLogouterror:null,

 //#############################

  socialLoginLoading:false,
  socialLoginerror: null,
  socialLoginData:null,



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

//###################################################################################################333


export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {

    case USER_REGISTER_REQUEST:
      return { ...state, userIdentificationLoading: false, userIdentificationerror: null };    
    case USER_REGISTER_SUCCESS: 
      return { ...state, userIdentificationData: action.payload, userIdentificationLoading: false, userIdentificationerror: null };
    case USER_REGISTER_FAIL:
     return { ...state, userIdentificationData:null, userIdentificationLoading: false, userIdentificationerror: action.payload  };
    case USER_REGISTER_RESET:
        return { ...state, userIdentificationData:null, userIdentificationLoading: false, userIdentificationerror: null  };


    case USER_LOGIN_REQUEST:
      return { ...state, userIdentificationLoading: false, userIdentificationerror: null };    
    case USER_LOGIN_SUCCESS: 
      return { ...state, userIdentificationData: action.payload, userIdentificationLoading: false, userIdentificationerror: null };
    case USER_LOGIN_FAIL:
     return { ...state, userIdentificationData:null, userIdentificationLoading: false, userIdentificationerror: action.payload  };
    case USER_LOGIN_RESET:
        return { ...state, userIdentificationData:null, userIdentificationLoading: false, userIdentificationerror: null  };

    
    case ANONYMOUS_REQUEST:
          return { ...state, userIdentificationLoading: false, userIdentificationerror: null };    
    case ANONYMOUS_SUCCESS: 
          return { ...state, userIdentificationData: action.payload, userIdentificationLoading: false, userIdentificationerror: null };
    case ANONYMOUS_FAIL:
         return { ...state, userIdentificationData:null, userIdentificationLoading: false, userIdentificationerror: action.payload  };
    case ANONYMOUS_RESET:
          return { ...state, userIdentificationData:null, userIdentificationLoading: false, userAnonymouserror: null  };
    

    
    case USER_LOGOUT_REQUEST:      
        return { ...state, userLogoutLoading: false };
    case USER_LOGOUT_SUCCESS:       
        return { ...state,  userIdentificationData: null, userLogoutLoading: true, userLogouterror:null };
    case USER_LOGOUT_FAIL:       
        return { ...state, userLogoutLoading: false, userLogouterror: action.payload };  
    case USER_LOGOUT_RESET:       
        return { ...state, userLogoutLoading: false, userLogouterror: null };  


    
      

    default:
      return state;
  }

};

//###############################################################################################