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

  const Links = [
    {
      name: "Profile",
      path: "/",
      

    },

    {
      name: "Calculator",
      path: "/calculator",
       
    }
  
  
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
              <Navigate to="/login" />;
          
     }



    return (

      

      <HStack
        justifyContent="center"
        bg={isAuthenticated ? "#6dd296" : "#5468ff"}
        // style={{position:"sticky", top:0 }}
        justify="center"
        w="100%"
        h={"70px"} >
      
        <Box>    

          <HStack w={"full"} gap={{ base: 5, md: "150px", lg: "150px" }}>
            {Links.map((el) => (
              <NavLink
                key={el.path}
                to={el.path}
                end >

                <Text fontSize="25px" color="whiteAlpha.900" p="10px 10px">
                  {el.name}
                </Text>

              </NavLink>
            ))}

{ isAuthenticated == false && <NavLink
                key={"/signup"} 
                to={"/signup"} 
                
                   end >

                <Text fontSize="25px" color="whiteAlpha.900" p="10px 10px">
                  {"Signup"}
                </Text>

              </NavLink>}




            {
                isAuthenticated 
                ?     <Button onClick={LogoutKaro}  size={"lg"} colorScheme='whiteAlpha'>LOGOUT</Button>

                : <NavLink  key={"/login"} to={"/login"} >
                <Text fontSize="25px" color="whiteAlpha.900" p="10px 10px">
                 Login
                </Text> </NavLink>

            }



         
          </HStack>
        </Box>
      </HStack>
       
      );
    };

export default Navbar
