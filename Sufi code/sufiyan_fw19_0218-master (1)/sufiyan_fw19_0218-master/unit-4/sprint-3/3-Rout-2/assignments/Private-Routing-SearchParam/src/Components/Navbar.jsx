
import React from "react"
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
import styles from "./Navbar.module.css"

const links = [
    {
      path: "/",
      title: "Home"
    },
   
    {
      path: "/products",
      title: "PRoducts"
      
    },
    {
      path: "/users",
      title: "Users"
    },

  ];


function Navbar(){
     
  const {isAuth} = useContext(AuthContext)

    return (


        <div>
             {links.map((link) => (

             <NavLink
              
               className={({ isActive }) =>
                 isActive ? styles.active : styles.default
               }

               key={link.path}
               to={link.path}
             >
               {link.title}
             </NavLink>

            ))}

       
       {isAuth ?
         <NavLink  
             className={({ isActive }) =>
                 isActive ? styles.active : styles.default
               } to="/logout">LogOut</NavLink> 
              :  <NavLink 
            
              className={({ isActive }) =>
                  isActive ? styles.active : styles.default
                } to="/login">Login</NavLink>
              }
          
            
           
                
        </div>




    )

}

export default Navbar





