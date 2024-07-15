import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import {
Input, Button, VStack,
    useToast,

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
    <VStack mt={5} p={10} bg={"white"} >

      

      <VStack   width={"60%"}>
      <VStack  padding={5}  w="full" spacing={5} >
     
      <Input 
           
           size={"lg"} name="username"  type="name"
           w="full" h={"80px"}  fontSize="3xl"  placeholder="Enter Username"
           onChange={hanldeChange}
      />

           <Input 
           
           size={"lg"} name="email"  type="email"
           w="full" h={"80px"}  fontSize="3xl"  placeholder="Enter Email"
           onChange={hanldeChange}
           />
         
           <Input 
            w="full" 
            size={"lg"} h={"80px"} fontSize="3xl"
            name="password" type="password" placeholder="Enter Password"
            onChange={hanldeChange}
           />
          
         </VStack>


      <Button 
      size={"lg"}
      p={50}
      borderRadius={0}
      fontSize="3xl"
      bg={"#5468ff"} color="white"  onClick={handleSubmit} type="submit"> Register</Button>
      </VStack>

    
   
    </VStack>
  );
      }
export default Signup;
