import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {useToast} from "@chakra-ui/react"

const PrivateRoute = ({children}) => {


    
 const  { isAuthenticated,  loading , error } = useSelector((store)=> store.auth)
 const toast = useToast();


    if(isAuthenticated){
      return children
    }


       toast({
            title: "You are not Authorised ",
            description: "please Sign in First",
            status: "warning",
            duration: 4000,
            isClosable: true,
          });


    return (
        // Redirecting to Login page
        <Navigate
          to="/admin-login-section"
   // spacer
        />
      );
  };

export default PrivateRoute
