import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login() {

  //https://reqres.in/api/login

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [click, setClick] = useState(false)

  const {loginUser} = useContext(AppContext)

  const NavigateKaro = useNavigate()

  const HandleLogin = async (e)=>{

    e.preventDefault()

    setClick(true)
    const userData = {
      email,
      password
    }
 
    let res = await fetch(`https://reqres.in/api/login`,{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type" : "application/json",
      },
    })
    res = await res.json();
   console.log(res)
    loginUser(res)
   
    NavigateKaro("/dashboard")
    

  }


  return (
    <div className="login-page">
      <form  className="form" data-testid="login-form">
        <div>
          <label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

             data-testid="email-input" 
             type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button onClick={HandleLogin}
          disabled={click===true} 
          data-testid="form-submit" type="submit" >
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
