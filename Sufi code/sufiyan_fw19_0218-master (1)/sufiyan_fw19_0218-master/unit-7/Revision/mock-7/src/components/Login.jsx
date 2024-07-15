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
import { Action_Signin_Auth } from "../redux/auth/auth.actions";
import Loading from "./Loading";


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
   

   dispatch(Action_Signin_Auth(loginCreds))
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
   
  

   //console.log(loginCreds)
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
    return <Navigate to="/data-dogs-section" />;
  }



  return (
    <VStack >

      <Text  fontWeight={600}  mt={"150px"} fontSize={"4xl"} >Admin Login </Text>

      <HStack   width={"60%"}>

      <VStack  padding={5}  w="full" spacing={5} >
           <Input 
           size={"lg"}
             name="email"
             type="email"
              w="full"
              h={"60px"}
              fontSize="3xl"
             placeholder="eve.holt@reqres.in"
             onChange={hanldeChange}
           />
           <Input 
            w="full"
           size={"lg"}
           h={"60px"}
           fontSize="3xl"
             name="password"
             type="password"
             placeholder="cityslicka"
             onChange={hanldeChange}
           />
          
         </VStack>


      <Button 
      size={"lg"}
      p={50}
      fontSize="3xl"
      borderRadius={100} colorScheme={"messenger"}  onClick={handleSubmit} type="submit"> Login</Button>
      </HStack>

    
   
    </VStack>
  );
      }
export default Login;
