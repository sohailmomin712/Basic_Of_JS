import React, { useEffect } from 'react'
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    
    HStack,
 
    Text,
    useToast,
 
  } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { Action_Logout_Auth } from '../redux/auth/auth.actions';
import { Action_Get_Dogs } from '../redux/dogs/dogs.actions';
  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "User Section",
      path: "/user-section",
    },
    
    {
        name: "Dogs",
        path: "/data-dogs-section",
    },
    {
        name: "Report",
        path: "/report-login-section",
    },
  ];

const Navbar = () => {

    const  { isAuthenticated, token,  loading , error } = useSelector((store)=> store.auth)

 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()
   


     const LogoutKaro = ()=>{
       
        
            dispatch(Action_Logout_Auth())
            toast({
                title: "Logged Out successfully",
                description: "Go and get exciting offers...",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
              <Navigate to="/admin-login-section" />;
            window.location.reload()
     }


     useEffect(()=>{
        dispatch(Action_Get_Dogs())
     },[])
    
   


    return (

      

      <HStack
        justifyContent="center"
        bg={isAuthenticated ? "purple" : "#0d6dd7"}
        // style={{position:"sticky", top:0 }}
       
        justify="center"
        w="100%"
        h={"70px"}
      >
        <Box >
            
       

          <HStack w={"full"} gap={{ base: 10, md: "5px", lg: 50 }}>
            {Links.map((el) => (
              <NavLink
                key={el.path}
                to={el.path}
             
                end
              >
                <Text fontSize="25px" color="whiteAlpha.900" p="10px 10px">
                  {el.name}
                </Text>

              </NavLink>
            ))}

            {
                isAuthenticated 
                ?     <Button onClick={LogoutKaro}  size={"lg"} colorScheme='whiteAlpha'>LOGOUT</Button>

                : <NavLink  key={"/admin-login-section"} to={"/admin-login-section"} >
                <Text fontSize="25px" color="whiteAlpha.900" p="10px 10px">
                Admin Login
                </Text> </NavLink>

            }



         
          </HStack>
        </Box>
      </HStack>
       
      );
    };

export default Navbar
