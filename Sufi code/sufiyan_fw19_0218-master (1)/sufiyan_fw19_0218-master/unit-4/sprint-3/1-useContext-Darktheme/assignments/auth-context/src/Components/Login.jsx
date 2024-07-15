import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"


  // {
  //   "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"
  //}

   const Login =()=>{
     
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin } = useContext(AuthContext) ;


    const handleLoginClick= ()=>{

        console.log("handleLoginClick is Running")

        const userLoginData = {
            email,
            password
        }

        axios
        .post("https://reqres.in/api/login", userLoginData )
        .then((res)=> {
           // console.log(res)
           // console.log(res.data)
            handleLogin(res.data.token,email)
        })
        .catch((err)=>{
            console.log(err)
        })

      
    }
     
    return (


        <div>
            <br />   <br />
         
            <input
             type="text"
              placeholder="email"
              value={email} 
               onChange={ (e) => setEmail(e.target.value) }
            />
             <br />
            <input
             type="text"
              placeholder="password"
              value={password} 
               onChange={ (e) => setPassword(e.target.value) }
            />
            <br /> <br />

            <button onClick={handleLoginClick}>
            Login
            </button>


        </div>
        
    )


  }

  export default Login