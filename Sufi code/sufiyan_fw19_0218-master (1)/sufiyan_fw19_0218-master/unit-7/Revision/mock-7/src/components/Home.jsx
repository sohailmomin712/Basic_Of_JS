import React from 'react'

import { NavLink,  useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    
    HStack,
 
    Text,
    VStack,
 
  } from "@chakra-ui/react";
import { useSelector } from 'react-redux';


const Home = () => {

    const  { isAuthenticated, token,  loading , error } = useSelector((store)=> store.auth)

  return (
   <VStack mt="150px" >
    
    { isAuthenticated 
    ? <Text fontSize={"3xl"} >Admin TOKEN : {token}</Text> 
     : <Text fontSize={"3xl"} >Admin Not Authenticated Check After Logged in</Text>}


     <HStack p={5}  w="100%" justifyContent={"center"} >


<NavLink  to={"/user-section"} > <Button   p={50}  fontSize={"4xl"} size="lg" colorScheme='linkedin'>USER</Button>
              </NavLink>
       
<NavLink  to={"/admin-login-section"} >  <Button p={50} fontSize={"4xl"} size="lg"  colorScheme='whatsapp'>ADMIN</Button>
              </NavLink>
    </HStack>
   </VStack>
  )
}

export default Home
