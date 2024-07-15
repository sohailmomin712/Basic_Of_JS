/// step 2  

import axios from "axios";
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";


 // action type asynchrounous function
 // to handle this we need to use middelwere or Redux THUNK

export const ACTION_SIGN_IN = ( creds )=> async( dispatch )=>{

    dispatch({ type : AUTH_SIGN_IN_LOADING })

    try{
        let res = await axios.post("https://reqres.in/api/login" , creds )
        dispatch({ type : AUTH_SIGN_IN_SUCCESS , payload : res.data })
        return res.data
    }catch(err){
        dispatch({ type : AUTH_SIGN_IN_ERROR , payload : err.message })
    }

}

 // action type default 
export const ACTION_SIGN_OUT = ()=> ({ type : AUTH_SIGN_OUT })



