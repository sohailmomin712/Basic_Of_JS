
import { 
    ADMIN_AUTH_SIGN_UP_LOADING,
ADMIN_AUTH_SIGN_UP_SUCCESS,
ADMIN_AUTH_SIGN_UP_ERROR,
ADMIN_AUTH_SIGN_IN_LOADING,
ADMIN_AUTH_SIGN_IN_SUCCESS,
ADMIN_AUTH_SIGN_IN_ERROR,    
ADMIN_AUTH_SIGN_OUT,
ApplytoJobs    ,
JOBS_DELETE_SUCCESS,

JOBS_LOADING,
JOBS_SUCCESS,
JOBS_ERROR,
 } from "./auth.types"
import axios from "axios"


const URL = "https://mock13-backend-hbez.onrender.com" 
//http://localhost:8080
//https://mock13-backend-hbez.onrender.com

export const ACTION_SIGNUP = ( creds ) => async( dispatch )=>{
    
    //console.log(creds)

    dispatch({ type : ADMIN_AUTH_SIGN_UP_LOADING })

    try{
        
        let res = await axios.post(`${URL}/user/signup`, creds)
       
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
        
        let res = await axios.post(`${URL}/user/login`, creds)
      //  dispatch({ type : ADMIN_AUTH_SIGN_IN_SUCCESS, payload : res.data })

      if(res.data.message == "Enter Credianteials"){
          
          return "Enter Credianteials"
       }

       console.log(res.data)

       if(res.data.message == "Login success"){
        dispatch({ type : ADMIN_AUTH_SIGN_IN_SUCCESS, payload : res.data })
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

export const Action_Add_Jobs = (data)=> async (dispatch)=>{

    dispatch({ type : ApplytoJobs, payload : data })

}

export const ACTION_GET_JOBS = () => async( dispatch )=>{
    
    //console.log(creds)

    dispatch({ type : JOBS_LOADING })

    try{
        
        let res = await axios.get(`${URL}/jobs`)
       
       // dispatch({ type : ADMIN_AUTH_SIGN_UP_SUCCESS, payload : res.data })
      // console.log(res)
       dispatch({ type : JOBS_SUCCESS, payload : res.data })
        return "Success" 
       

    }catch(err){
    
        dispatch({ type : JOBS_ERROR, payload : err.message })
         return("err")
    }

}

export const ACTION_REMOVE_JOBS = (payload=1)=> async (dispatch)=>{
  //  console.log(payload)
    dispatch({ type: JOBS_LOADING})
   
    try{
       let res = await axios.delete(`${URL}/jobs`, {
            headers : {
                "Content-Type" : "application/json"
            },
            data : {
                 id: payload.id,
            } 
        })
        if(res.status==200)  {
            dispatch(ACTION_GET_JOBS())
              return "DELETED"
          
        }
    }catch(err){
        console.log("ERRR")
        dispatch({ type : JOBS_ERROR , payload : err.message })
    }

}

