import axios from "axios"
import {  LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types"



export const LoGin = (creds)=> async (dispatch)=>{

    dispatch({ type : LOGIN_REQUEST})

   try{

    let res = await axios.post("https://reqres.in/api/login" , creds)
    dispatch({ type : LOGIN_SUCCESS, payload: res.data })
    return res.data

   }catch(err){
    dispatch({ type : LOGIN_ERROR, payload: err.message})
   }
}

export const LogOut = ()=> ({ type : LOGOUT })