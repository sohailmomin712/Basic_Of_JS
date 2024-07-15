import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginAction } from '../redux/Auth/auth.action'

const Login = () => {

    const { isAuth , loading, error,errMessage } = useSelector((store)=> store.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate(); 
    const { state } = useLocation();

    const [loginCreds, setLoginCreds] = useState({});

   const hanldeChange = (e)=>{
    
    const { name , value} = e.target
  
    setLoginCreds({ 
       ...loginCreds,
       [name] : value 
    })
   }

   const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(LoginAction(loginCreds))
   }
 

   useEffect(()=>{
      if(isAuth){

        if(state == null){
            navigate("/")
        }else if(state.from){
            navigate(state.from , { replace: true });
        }else{
            navigate("/")
        }

      }
   },[isAuth])
   
   

if(loading){
    return <div>... Loading</div>
  }else if(error){
    return <div>... error{errMessage} </div>
  }

  return (
    <div>
        <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
