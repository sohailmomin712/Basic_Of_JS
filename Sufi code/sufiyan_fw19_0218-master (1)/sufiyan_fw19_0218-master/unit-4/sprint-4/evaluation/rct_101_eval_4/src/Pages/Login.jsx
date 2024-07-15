import { Button, Input, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGINFAIL, LOGINREQUEST, LOGINSUCCESS } from "../Context/AuthContext/action";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {dispatch,state} = useContext(AuthContext)
  const {isLoading,authStatus} = state
  const toast = useToast()

  const NavigateKaro = useNavigate()
 const handleLogin = ()=>{

  const userData = {
    email,
    password
  }

  dispatch(LOGINREQUEST)
  axios.post(`https://reqres.in/api/login`,userData)
  .then((res)=>{
    console.log(res.data.token)

    const action = LOGINSUCCESS(res.data.token)
    dispatch(action)

    toast({
      title: 'Login Success.',
      
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    NavigateKaro("/")

  })
  .catch((err)=>{
    dispatch(LOGINFAIL)
    toast({
      title: 'Something went wrong.',
      
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  })
  

 }


  return <VStack  justifyContent="center" border="1px solid" borderColor="gray.300" padding={5} borderRadius={5}>
        
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} 
        type="email" placeholder="Enter Email" />
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} 
        type="password" placeholder="Enter Password" />
        <Button disabled={isLoading===true || authStatus==true} onClick={handleLogin} colorScheme="linkedin" >LOGIN</Button>
    
    </VStack>;
};

export default Login;
