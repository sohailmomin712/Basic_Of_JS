

import { 
ADMIN_AUTH_SIGN_IN_LOADING,
ADMIN_AUTH_SIGN_IN_SUCCESS,
ADMIN_AUTH_SIGN_IN_ERROR,
ADMIN_AUTH_SIGN_OUT,  
} from "./auth.types";

let LocalToken = localStorage.getItem("token");
const check = (LocalToken!=undefined)

export const authinitialValues = {
  token: LocalToken,
  isAuthenticated: check ,
  loading: false,
  error: false
};

export const AuthReducer = (state = authinitialValues,  { type , payload} ) => {


  switch(type){

    case ADMIN_AUTH_SIGN_IN_LOADING : {
      return{
        ...state , 
        loading: true, 
        error : false
      }
    }

    case ADMIN_AUTH_SIGN_IN_SUCCESS : {
      localStorage.setItem("token", payload.token)
      return{
        ...state , 
        isAuthenticated: true, 
        token: payload.token,
        loading: false,
        error : false
      }

    }

    case ADMIN_AUTH_SIGN_IN_ERROR : {

      return{
        ...state , 
        token: "",
        isAuthenticated: false,
        loading: false,
        error : true
      }
    }

    case ADMIN_AUTH_SIGN_OUT : {
      localStorage.removeItem("token") 
      return{
        ...state , 
        data: {
          token: "",
          isAuthenticated: false,
        },
        loading: false,
        error : false
      }
    }

    default : {
      return state
    }

}


};

