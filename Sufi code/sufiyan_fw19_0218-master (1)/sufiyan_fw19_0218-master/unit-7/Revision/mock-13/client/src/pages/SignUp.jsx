import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import {
Input, Button, VStack,
    useToast,
    FormLabel,
    FormControl,
    Image,

  } from "@chakra-ui/react";

import Loading from "../components/Loading"
import {  ACTION_SIGNUP } from "../redux/auth/auth.actions";


const Signup = () => {

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

  if( !loginCreds.username ||  !loginCreds.email ||  !loginCreds.password ){
   return toast({
      title: "Please Enter valid Details",
  
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
  }


   dispatch(ACTION_SIGNUP(loginCreds))
   .then((res)=> {
    if(res == "err" || res=="User Already Exist Try Logging in"){
        toast({
            title: "User Already Created Try Logging in",
            description: "goto Login",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
    }

    if(res == "Signup success"){
        toast({
            title: "Signup success",
            description: "Registration Successfull Redirecting to Login",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
 
          navigate("/login")
         // <Navigate to="/login" />;
    }


   })
   
  

   
   }

 


 
 if (loading) {
    return <Loading />;
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
      <FormLabel>Username</FormLabel>
      <Input 
           
           size={"lg"} name="username"  type="name"
           w="full"  placeholder="Enter Username"
           onChange={hanldeChange}
      />
      </FormControl>

 <FormControl>
      <FormLabel>Email</FormLabel>
           <Input 
           
           size={"lg"} name="email"  type="email"
           w="full"  placeholder="Enter Email"
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
      w="100%"
      size={"lg"}
      colorScheme="blackAlpha" color="white"  onClick={handleSubmit} type="submit"> Sign Up</Button>
      </VStack>
          
 </VStack>


    

    
   
    </VStack>
  );
      }
export default Signup;
