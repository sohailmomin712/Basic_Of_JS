
// reqres.in
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";



  // {
  //   "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"
  // "password": "pistol"
  //}

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loginUser, isAuth } = useContext(AppContext) ;


  const handleLoginClick= (e)=>{

    e.preventDefault()

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
        loginUser(res.data.token)

    })
    .catch((err)=>{
        console.log(err)
    })

    console.log("handleLoginClick is Running")
}
 

  return (
    <div>
      <form onSubmit={handleLoginClick} data-testid="login-form">
        <div>
          <label>
            Email
            <input 
             data-testid="email-input" 
             type="email"
              placeholder="email"
              value={email} 
              onChange={ (e) => setEmail(e.target.value) }
               />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password} 
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
        </div>
        <div>
          <input 
          data-testid="form-submit"
           type="submit" 
           value="SUBMIT" 
         
           />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
