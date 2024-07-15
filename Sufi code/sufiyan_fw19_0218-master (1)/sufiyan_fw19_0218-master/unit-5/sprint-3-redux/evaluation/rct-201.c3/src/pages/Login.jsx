import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { action_sign_in } from "../redux/auth/auth.actions";


const Login = () => {

  const  {  data , loading , error } = useSelector((store)=> store.auth)
  const {isAuthenticated} = data

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
   dispatch(action_sign_in(loginCreds))
   }
 

   
   useEffect(()=>{
    if(isAuthenticated){

      if(state == null){
          navigate("/")
      }else if(state.from){
          navigate(state.from , { replace: true });
      }else{
          navigate("/")
      }

    }
 },[isAuthenticated])

 
if(loading){
  return <div>... Loading</div>
}else if(error){
  return <div>... error</div>
}



  return (
    <div>
      <form   
      onSubmit={handleSubmit}
      style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
          marginTop:"50px"
        }}>
        <input data-cy="login-email"
          name="email"
          type="email"
          placeholder="eve.holt@reqres.in"
          onChange={hanldeChange}
        />
        <input data-cy="login-password"
          name="password"
          type="password"
          placeholder="cityslicka"
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">LOGIN</button>
      </form>
    </div>
  );
      }
export default Login;
