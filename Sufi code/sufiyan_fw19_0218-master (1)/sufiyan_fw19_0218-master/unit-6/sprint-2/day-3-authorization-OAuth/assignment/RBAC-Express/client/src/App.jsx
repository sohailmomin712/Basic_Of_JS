import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios"

function App() {

  const [forget, Setforget] = useState(false)

  const [OTP, setOTP] = useState(false)
  const [Pass, setPass] = useState(false)

  const initialValue = {
    name: "",
    age: "",
    email: "",
    password: "",
    role:"",
  
   
  };

  const [ signUpForm , setsignUpForm ] = useState(initialValue)

  
  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    setsignUpForm({ ...signUpForm, [key]: val });
  };
////////////////

const [ Lemail, Setemail ] = useState("")
const [ Lpassword, Setpassword ] = useState("")

//////////////////
const [ Femail, SetFemail ] = useState("")
const [ OTPNumber, SetOTPNumber ] = useState("")

//////
const [ Npassword, SetNpassword ] = useState("")


////
const [ token, Settoken ] = useState("")
const [ refresh, Serefresh ] = useState("")

// http://localhost:8080/signup



const SignupPost = ()=> {

 axios.post("http://localhost:8080/signup", signUpForm)
 .then((res)=>console.log(res.data))
 .catch((e)=> console.log(e.response.data))

}


const LoginPOST = ()=> {

  axios.post("http://localhost:8080/login", {email : Lemail, password : Lpassword})
  .then((res)=> {
    Settoken(res.data.token)
    Serefresh(res.data.REFRESHtoken  )
    alert("Login Successfull")
  })
  .catch((e)=> console.log(e.response.data))
 
 }

 const getOTPPOST = ()=> {

  axios.post("http://localhost:8080/reset-password/getotp", {email : Femail})
  .then((res)=> {
   console.log(res.data)
    alert("OTP SEND Successfull")
  })
  .catch((e)=> console.log(e.response.data))
 
 }

 const resetPassword = ()=>{
  axios.post("http://localhost:8080/reset-password/reset", {  email: Femail, otp: OTPNumber,  password: Npassword  })
  .then((res)=> {
   console.log(res.data)
    alert("PASSWORD APDATED SUCCESS")
  })
  .catch((e)=> console.log(e.response.data))
 }

  return (

    <div className="App"> <h1>USE REAL EMAIL FOR SIGNUp</h1>
    <div  style={{display:"flex" , gap:"50px", padding:"50px", border:"1px solid white"}}  >

      
      
      <div style={{border:"1px solid white", padding:"50px", }}>
       
       <h2>SIGNUP</h2>
       <input value={signUpForm.name} name="name" onChange={handleChange}  type="text" placeholder='name' /><br />
       <input value={signUpForm.age} name="age" onChange={handleChange}  type="number" placeholder='age' /><br />
       <input value={signUpForm.email} name="email" onChange={handleChange}  type="text" placeholder='email' /><br />
       <input value={signUpForm.password} name="password" onChange={handleChange}  type="text" placeholder='password' /><br />
       <select name="role" onChange={handleChange} value={signUpForm.role} >
         <option value="HR">HR</option>
         <option value="Employee">Employee</option>
         <option value="Guest">Guest</option>
       </select> <br />
       
       <button onClick={()=> SignupPost()}>SIGNUP</button>

      </div>

      
     {
      forget==false ?  <div style={{border:"1px solid white", padding:"50px", }}>
      <h2>LOGIN</h2>
   
       <input type="text" value={Lemail} onChange={(e)=>Setemail(e.target.value)} placeholder='email' /><br />
       <input type="text" value={Lpassword} onChange={(e)=>Setpassword(e.target.value)} placeholder='password' /><br />
       <button onClick={()=> LoginPOST()} >Login</button>


       <br /><br /><br />
       <button onClick={()=> {
      
        Setforget(true)
        
        }} >Forget Password</button>
      </div> : 

      <div style={{border:"1px solid white", padding:"50px", }}>
      <h2>{ Pass ? "CHANGE PASSWORD" : "FORGET PASSWORD" }</h2>

      {
      Pass ? <div>
           <input type="text" value={Npassword} onChange={(e)=>SetNpassword(e.target.value)} placeholder='enter new password' /><br /><br />
          <button onClick={()=>{
              Setforget(false)
              setOTP(false)
              setPass(false)
          }} >Update Password</button>
      </div> :  <div>
      <input type="text" value={Femail} onChange={(e)=>SetFemail(e.target.value)} placeholder='email' /><br />
     
       <button onClick={()=>{
        setOTP(true)
        getOTPPOST()
        }} >get OTP</button>
       <br /><br /><br />
      
       {
        OTP && <div>
            
            <input type="number" value={OTPNumber} onChange={(e)=>SetOTPNumber(e.target.value)} placeholder='OTP' /><br />
            <input type="text" value={Npassword} onChange={(e)=>SetNpassword(e.target.value)} placeholder='enter new password' /><br /><br />
            <button onClick={()=>{
              Setforget(false)
              resetPassword()
            }} >CHANGE PASSWORD</button>
        </div>
       } </div>
     }
   

      </div> 
     }

     
     
    </div></div>
  )
}

export default App

