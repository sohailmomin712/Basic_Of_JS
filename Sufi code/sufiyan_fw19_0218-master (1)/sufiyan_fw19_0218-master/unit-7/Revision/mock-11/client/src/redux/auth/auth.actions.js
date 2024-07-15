
import { 
    ADMIN_AUTH_SIGN_UP_LOADING,
ADMIN_AUTH_SIGN_UP_SUCCESS,
ADMIN_AUTH_SIGN_UP_ERROR,
ADMIN_AUTH_SIGN_IN_LOADING,
ADMIN_AUTH_SIGN_IN_SUCCESS,
ADMIN_AUTH_SIGN_IN_ERROR,    
ADMIN_AUTH_SIGN_OUT    
 } from "./auth.types"
import axios from "axios"


const URL = "https://mock-backend-bep3.onrender.com/user/" 
//http://localhost:8080/user/

export const ACTION_SIGNUP = ( creds ) => async( dispatch )=>{
    
    console.log(creds)

    dispatch({ type : ADMIN_AUTH_SIGN_UP_LOADING })

    try{
        
        let res = await axios.post(`https://mock-backend-bep3.onrender.com/user/signup`, creds)
       
       // dispatch({ type : ADMIN_AUTH_SIGN_UP_SUCCESS, payload : res.data })
       if(res.data.message == "Signup success"){
        dispatch({ type : ADMIN_AUTH_SIGN_UP_SUCCESS, payload : res.data })
          return "Signup success"
       }

       if(res.data.message == "User Already Created Try Logging in"){
        return "User Already Created Try Logging in"
     }

        //return  console.log(res.data.message == "Signup success")
      

    }catch(err){
    
        dispatch({ type : ADMIN_AUTH_SIGN_UP_ERROR, payload : err.message })
         return("err")
    }

}

export const ACTION_LOGIN = ( creds ) => async( dispatch )=>{

    dispatch({ type : ADMIN_AUTH_SIGN_IN_LOADING })

    try{
        
        let res = await axios.post("https://mock-backend-bep3.onrender.com/user/login", creds)
      //  dispatch({ type : ADMIN_AUTH_SIGN_IN_SUCCESS, payload : res.data })

      if(res.data.message == "Enter Credianteials"){
          
          return "Enter Credianteials"
       }

       if(res.data.message == "Login success"){
        dispatch({ type : ADMIN_AUTH_SIGN_IN_SUCCESS, payload : res.data.token })
        return "Login success"
       }

       if(res.data.message == "Authentication Failed"){
       
        return "Authentication Failed"
       }

    }catch(err){

        dispatch({ type : ADMIN_AUTH_SIGN_IN_ERROR, payload : err.message })
         return("err")
    }

}







export const Action_Logout_Auth  = ()=> ({ type : ADMIN_AUTH_SIGN_OUT })