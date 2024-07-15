
import { 
ADMIN_AUTH_SIGN_IN_LOADING,
ADMIN_AUTH_SIGN_IN_SUCCESS,
ADMIN_AUTH_SIGN_IN_ERROR,    
ADMIN_AUTH_SIGN_OUT    
 } from "./auth.types"
import axios from "axios"


export const Action_Signin_Auth = ( creds ) => async( dispatch )=>{

    dispatch({ type : ADMIN_AUTH_SIGN_IN_LOADING })

    try{
        
        let res = await axios.post("https://reqres.in/api/login", creds)
        dispatch({ type : ADMIN_AUTH_SIGN_IN_SUCCESS, payload : res.data })
      

    }catch(err){
    
        dispatch({ type : ADMIN_AUTH_SIGN_IN_ERROR, payload : err.message })
         return("err")
    }

}

export const Action_Logout_Auth  = ()=> ({ type : ADMIN_AUTH_SIGN_OUT })