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
    Image,
    FormControl,
    FormLabel,
 
  } from "@chakra-ui/react";

import Loading from "../components/Loading"
import { ACTION_LOGIN } from "../redux/auth/auth.actions";


const Login = () => {

 const  { isAuthenticated,  loading , error , userData} = useSelector((store)=> store.auth)
  


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
    
    return  userData.role=="Admin" 
    ? <Navigate to="/adminlistingpage" />  : <Navigate to="/jobpage" /> ;
  }



  return (
    <VStack mt={5} p={10}  >

      

    <VStack  bg={"white"} 
    p={5}
    shadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
    width={"50%"}  borderRadius={"10"} >
      <Image src="https://www.masaischool.com/img/navbar/logo.svg" />
    <VStack  padding={5}  w="full" spacing={5} >

    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input 
   
           size={"lg"} name="email"  type="email"
           w="full"   placeholder="Enter Email"
           onChange={hanldeChange}
           />
      </FormControl>


      <FormControl>
      <FormLabel>Password</FormLabel>   
           <Input 
            w="full" 
            size={"lg"} 
            name="password" type="password" placeholder="Enter Password"
            onChange={hanldeChange}
           />
    </FormControl>   
    <Button 
      variant={"solid"}
      size={"lg"}
     w="100%"
     colorScheme="blackAlpha" color="white"  onClick={handleSubmit} type="submit"> Login</Button>
         </VStack>


    
      </VStack>

    
   
    </VStack>
  );
      }
export default Login;
