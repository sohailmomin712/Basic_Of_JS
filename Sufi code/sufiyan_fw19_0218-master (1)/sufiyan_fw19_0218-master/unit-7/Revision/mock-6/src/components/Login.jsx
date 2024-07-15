import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const [userName , setUserName] = useState("")
  const [passWord , setpassWord] = useState("")

  const { isAuth,  LoginComponent,Loading,
    setLoginComponent, handleLogin } = useContext(AuthContext);

  const DoLogin = ()=>{
    handleLogin({ userName , passWord })
  }

  const RedirectKaro = ()=>{
    alert("Redirecting to Signup Page")
     setLoginComponent(false)
  }


  if(Loading){
    return(
    <div  id="dashbord-div">
     <img src='https://dltqhkoxgn1gx.cloudfront.net/img/posts/6-vue-loader-animation-libraries-to-reduce-your-bounce-rate-2.png' />
    </div>

    )
 }

  return (
    <div  id="form-div">
     <p>Welcome !</p>
    <h1>Sign in</h1>
    <label >User Name:</label><br/>
    <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" /><br/>

    <label >Password:</label><br/>
    <input value={passWord} onChange={(e)=>setpassWord(e.target.value)} type="password"  /><br/><br/>

    <button id='main-button' onClick={DoLogin} >Login</button>

    <p>Didn't have account <button id='link' onClick={RedirectKaro}  >Register</button> </p>
   

    </div>
  )
}

export default Login
