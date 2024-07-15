import React from 'react'
import { NavLink } from 'react-router-dom';


const Links = [
    {name : "Home", path : "/"},
    {name : "About", path : "/about"},
    {name : "Contact", path : "/contact"},
    {name : "Products", path : "/products"},
    {name : "Login", path : "/login"},
]


function NavBar() {

    const defaultStyle = {
      textDecoration: "none",
      color: "black",
    }

    const activeStyle = {
      textDecoration: "none",
      color: "red",
    };
  
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "80%",
          margin: "auto"
        }}
      >
        {Links.map((link) => (
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : defaultStyle;
            }}
          // className={({ isActive }) => {
          //   return isActive ? styles.active : styles.default;
          // }}
            key={link.path}
            to={link.path}
            end
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    );
  }
export default NavBar
