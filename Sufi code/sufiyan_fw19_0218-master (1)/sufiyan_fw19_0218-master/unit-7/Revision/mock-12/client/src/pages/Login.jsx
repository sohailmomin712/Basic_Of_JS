import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import {
    Box,Input,
    Button,
    
    VStack,
    useToast,
    Text,
    HStack,
 
  } from "@chakra-ui/react";

import Loading from "../components/Loading"
import { ACTION_LOGIN } from "../redux/auth/auth.actions";


const Login = () => {

 const  { isAuthenticated,  loading , error } = useSelector((store)=> store.auth)
  


 const dispatch = useDispatch()
  const navigate = useNavigate(); 
  const toast = useToast();


  const [loginCreds, setLoginCreds] = useState({});

  const hanldeChange = (e)=>{
    
    const { name , value} = e.target
  
    setLoginCreds({ 
       ...loginCreds,
       [name] : value 
    })
   }

  

 const handleSubmit = ()=>{
   
//console.log(loginCreds)

   dispatch(ACTION_LOGIN(loginCreds))
   .then((res)=> {
    if(res == "err"){
        toast({
            title: "Wrong Credentials",
            description: "Incorrect Email or Password",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
    }

    
   })
   
  

   
   }
 


 
 if (loading) {
    return <Loading />;
  } 
 


  if (isAuthenticated) {
    toast({
      title: "Logged in successfully",
      description: "Go and get exciting offers...",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    return <Navigate to="/" />;
  }



  return (
    <VStack mt={5} p={10} bg={"white"} >

      

      <VStack   width={"60%"}>
      <VStack  padding={5}  w="full" spacing={5} >
           <Input 
           variant={"flushed"}
           size={"lg"} name="email"  type="email"
           w="full" h={"80px"}  fontSize="3xl"  placeholder="Enter Email"
           onChange={hanldeChange}
           />
           <Input 
            w="full" variant={"flushed"}
            size={"lg"} h={"80px"} fontSize="3xl"
            name="password" type="password" placeholder="Enter Password"
            onChange={hanldeChange}
           />
          
         </VStack>


      <Button 
      variant={"solid"}
      size={"lg"}
      p={50}
      borderRadius={0}
      fontSize="3xl"
     bg={"#5468ff"} color="white"  onClick={handleSubmit} type="submit"> Login</Button>
      </VStack>

    
   
    </VStack>
  );
      }
export default Login;
