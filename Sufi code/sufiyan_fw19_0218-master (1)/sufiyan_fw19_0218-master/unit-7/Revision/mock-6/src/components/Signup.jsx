import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext'



const Signup = () => {

  const [Email , SetEmail] = useState("")
  const [userName , setUserName] = useState("")
  const [passWord , setpassWord] = useState("")
  const [confirmPassWord , setconfirmPassWord] = useState("")


  const { isAuth,  LoginComponent,Loading,
    setLoginComponent } = useContext(AuthContext);

  const DoSignup = ()=>{

    
    if(Email == "") return alert("plese enter all details")
    if(userName == "") return alert("plese enter all details")
    if(passWord == "") return alert("plese enter all details")
    if(confirmPassWord == "") return alert("plese enter all details")    


    if( passWord !== confirmPassWord ) return alert("Both Password should match")

    const userData = {
       
        "email": Email,
        "username": userName,
        "password": passWord,
        "tasks": []
    }


    // Send a POST request to the JSON server
   fetch("https://json-server-3spu.onrender.com/api/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      // Add the book to the table
      alert("Registeration Succesfull")
      setLoginComponent(true)
 
    })
    .catch(error => {
      console.error("Error:", error);
    });

    console.log( Email, userName, passWord,  confirmPassWord,)
  }

  
  const RedirectKaro = ()=>{
    alert("Redirecting to Login Page")
     setLoginComponent(true)
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
    <h1>Sign Up Karo</h1>

    <label >Your Email:</label><br/>
    <input value={Email} onChange={(e)=>SetEmail(e.target.value)} type="text" /><br/>


    <label >User Name:</label><br/>
    <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" /><br/>

    <label >Password:</label><br/>
    <input value={passWord} onChange={(e)=>setpassWord(e.target.value)} type="password"  /><br/><br/>

    <label >Confirm Password:</label><br/>
    <input value={confirmPassWord} onChange={(e)=>setconfirmPassWord(e.target.value)} type="password"  /><br/><br/>

    <button id='main-button' onClick={DoSignup} >Sign up</button>

    <p>Already have  a account <button id='link'onClick={RedirectKaro} >Login</button> </p>
   

    </div>
  )
}

export default Signup
