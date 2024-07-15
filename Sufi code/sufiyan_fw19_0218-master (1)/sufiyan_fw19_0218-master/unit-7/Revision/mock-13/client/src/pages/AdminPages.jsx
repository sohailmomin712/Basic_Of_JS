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
    Select,
 
  } from "@chakra-ui/react";

import Loading from "../components/Loading"
import { ACTION_LOGIN } from "../redux/auth/auth.actions";


const AdminPages = () => {

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

 //  dispatch(ACTION_LOGIN(loginCreds))
 //  .then((res)=> {
 //   if(res == "err"){
 //       toast({
 //           title: "Wrong Credentials",
 //           description: "Incorrect Email or Password",
 //           status: "error",
 //           duration: 4000,
 //           isClosable: true,
 //         });
 //   }
//
 //   
 //  })
 //  
  

   
   }
 


 
 if (loading) {
    return <Loading />;
  } 
 

  //{
  //  name: "Masai School",
  //  location : "Pune",
  //  contract : "Part Time",
  //  jobrole : "Senior Full Stack Developer"
  //}



  return (
    <VStack mt={5} p={10}  >

      

    <VStack  bg={"white"} 
    p={5}
    shadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
    width={"50%"}  borderRadius={"10"} >
      <Image src="https://www.masaischool.com/img/navbar/logo.svg" />
    <VStack  padding={5}  w="full" spacing={5} >

    <FormControl>
      <FormLabel>Company Name</FormLabel>
      <Input 
   
           size={"lg"} name="Company Name"  type="name"
           w="full"   placeholder="Enter company Name"
           onChange={hanldeChange}
           />
      </FormControl>

      <FormControl>
      <FormLabel>Contract</FormLabel>   
      <Select bg={"white"} placeholder='Select'>
                           <option value='Part Time'>Part Time</option>
                           <option value='Full Time'>Full Time</option>
        </Select>
    </FormControl>

    <FormControl>
      <FormLabel>Location</FormLabel>   
      <Select bg={"white"} placeholder='Select'>
      <option value='Pune'>Pune</option>
                           <option value='Bangalore'>Bangalore</option>
                           <option value='Nashik'>Nashik</option>
                           <option value='Goa'>Goa</option>
        </Select>
    </FormControl>

      <FormControl>
      <FormLabel>Job Role</FormLabel>   
           <Input 
            w="full" 
            size={"lg"} 
            name="jobrole" type="name" placeholder="Enter Role"
            onChange={hanldeChange}
           />
    </FormControl>   
    <Button 
      variant={"solid"}
      size={"lg"}
     w="100%"
     colorScheme="blackAlpha" color="white"  onClick={handleSubmit} type="submit"> List Company</Button>
         </VStack>
   
      </VStack>

    
   
    </VStack>
  );
      }
export default AdminPages;
