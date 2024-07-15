import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./auth.types"



let token = localStorage.getItem("token")
///   !!"" = false = no token
///   !!"dadasd" = true = with token

const init = {
    isAuth : !!token ,
    token : token,
    loading : false ,
    error : false ,
    errMessage: ""
  }
 
export const AuthReducer = ( state = init, { type , payload } )=>{


    switch(type){

        case LOGIN_REQUEST : {
    
            return {
              ...state,
              loading: true,
              error : false,
              errMessage: ""
            }
        } 

        case LOGIN_SUCCESS : {
            localStorage.setItem("token", payload.token)
            return {
              ...state,
              isAuth: true,
              token: payload.token,
             loading: false,
             error : false,
             errMessage: ""
      
            }
        }

        case LOGIN_ERROR : {

            return {
              ...state,
              loading: false,
              error : true,
              errMessage : payload
            }
        }

        case LOGOUT_SUCCESS : {
            localStorage.removeItem("token") 
            return {
              ...state,
              isAuth: false,
              token: "",
              errMessage: ""
            }
        }

        default : {
            return state
        }

    }

}  