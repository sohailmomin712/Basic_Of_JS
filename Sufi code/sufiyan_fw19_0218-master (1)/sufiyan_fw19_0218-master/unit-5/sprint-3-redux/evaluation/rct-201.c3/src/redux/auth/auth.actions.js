// Auth Actions here

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types"
import axios from "axios"

// AUTH_SIGN_IN_LOADING
// AUTH_SIGN_IN_SUCCESS
// AUTH_SIGN_IN_ERROR
// AUTH_SIGN_OUT
// RESET_AUTH

export const action_sign_in = ( creds ) => async( dispatch )=>{

    dispatch({ type : AUTH_SIGN_IN_LOADING })

    try{
        
        let res = await axios.post("https://reqres.in/api/login", creds)
        dispatch({ type : AUTH_SIGN_IN_SUCCESS, payload : res.data })
        return res.data

    }catch(err){
        dispatch({ type : AUTH_SIGN_IN_ERROR, payload : err.message })
    }

}

export const action_sign_out = ()=> ({ type : AUTH_SIGN_OUT })