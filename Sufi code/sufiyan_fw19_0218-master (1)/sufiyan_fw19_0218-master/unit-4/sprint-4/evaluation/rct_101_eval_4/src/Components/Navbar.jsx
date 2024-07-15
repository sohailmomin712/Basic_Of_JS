import { HStack,  Spacer, Text, Wrap } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";



const Navbar = () => {


  const {state} = useContext(AuthContext)
  const {authStatus, token } = state


  
  const Links = [

    { name: "Home" , path:"/" },
    { name: authStatus ? "LogOut" : "Login" , path:authStatus ? "/login" : "/login"},
    { name: "Cart" , path:"/cart" },
  
  ]

  return <Wrap w="100%" padding={5} bg="#eeee" >
   
   {authStatus ? <Text  fontSize="2xl" >Token : {token} </Text>
    : <Text  fontSize="2xl" >Login First </Text>}

   <Spacer />

   {
 Links.map((el)=>(
      <NavLink key={el.name} to={el.path}
      className={({ isActive }) => {
        return isActive ? "activeStyle" : "defaultStyle"; }} end
      >
         <Text fontSize="2xl" >{el.name}</Text>
      </NavLink>
    ))

   }
  </Wrap>;
};

export default Navbar;
