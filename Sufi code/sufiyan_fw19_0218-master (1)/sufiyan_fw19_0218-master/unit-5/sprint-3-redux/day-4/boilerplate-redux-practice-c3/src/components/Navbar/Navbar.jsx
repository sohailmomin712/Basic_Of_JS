import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ACTION_SIGN_OUT } from "../../store/auth/auth.actions";
import { ACTION_GET_CART } from "../../store/cart/cart.actions";

const Navbar = () => {



  const  {  data , loading , error } = useSelector((store)=> store.auth)
  const {isAuthenticated} = data

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLoginClick = () => {
    // login screen
    if (isAuthenticated) {
     dispatch(ACTION_SIGN_OUT())
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };




 const { data: cartData } = useSelector((store)=> store.cart)

 //console.log(cartData.length)



  useEffect(()=>{
    
     dispatch( ACTION_GET_CART())
  },[])



  return (
    <div data-cy="navbar" style={{display : "flex", justifyContent:"space-around"}}  >
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/">
        <a data-cy="navbar-home-link"> HOME </a>
        </Link>
      </div>
      <div style={{display : "flex", gap:"50px"}} >
        <div data-cy="navbar-cart-items-count"> Cart : { isAuthenticated ? cartData.length : 0}  </div>
        <button data-cy="navbar-login-logout-button"
        onClick={handleLoginClick}  > 
        
        {isAuthenticated ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
