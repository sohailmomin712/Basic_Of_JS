import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { action_sign_out } from "../../redux/auth/auth.actions";
import { action_get_cartItem } from "../../redux/cart/cart.actions";



const Navbar = () => {


  
  const  {  data , loading , error } = useSelector((store)=> store.auth)
  const {isAuthenticated} = data

  const dispatch = useDispatch()
  const navigate = useNavigate(); 

 // console.log(isAuthenticated)

 
useEffect(()=>{
  dispatch( action_get_cartItem())
},[])

const { data: cartItems } = useSelector((store)=> store.cart)

 //console.log(cartItems)

 const handleClick = ()=>{

  if(isAuthenticated){
    dispatch(action_sign_out())
  }else{
    navigate("/login")
  }

 }


  return (

    <div data-cy="navbar" style={{display:"flex", justifyContent:"space-around"}} >

      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/" >
           <a data-cy="navbar-home-link">Home</a>
        </Link>
      </div>

      <div style={{display:"flex", gap:"50px"}} >
        <div data-cy="navbar-cart-items-count"> Cart : { isAuthenticated ? cartItems.length : 0}  </div>
        <button data-cy="navbar-login-logout-button"
         onClick={handleClick}  >
         {isAuthenticated ? "LOGOUT" : "LOGIN"}

        </button>
      </div>
    </div>
  );
};

export default Navbar;
