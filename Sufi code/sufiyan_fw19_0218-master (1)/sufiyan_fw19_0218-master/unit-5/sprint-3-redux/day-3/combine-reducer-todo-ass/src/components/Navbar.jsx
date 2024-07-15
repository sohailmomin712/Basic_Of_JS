import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogoutAction } from '../redux/Auth/auth.action';
import { LOGOUT_SUCCESS } from '../redux/Auth/auth.types';

const Navbar = () => {

  const {isAuth} = useSelector((store)=>store.auth)

  const navigate = useNavigate();
 
  const dispatch = useDispatch()
  const { state } = useLocation();

  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
     dispatch(LogoutAction())
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };

console.log(state == null)


    return (
        <div 
        
        style={{ padding: "20px", display: "flex", gap: "50px", backgroundColor:"burlywood", color:"white", fontSize:"25px", fontWeight:"bolder" }}>
          Navbar:
          <Link style={{textDecoration:"none", color:"brown", fontWeight:"bold", fontSize:"25px"}} to="">Home</Link>
          <Link style={{textDecoration:"none", color:"brown", fontWeight:"bold", fontSize:"25px"}} to="/calculator">Calcultor </Link>
          <Link style={{textDecoration:"none", color:"brown", fontWeight:"bold", fontSize:"25px"}} to="/todo">Todo</Link>
        
          <button onClick={handleLoginClick}>
            {/* Spacer */}
            {isAuth ? "Logout" : "Login"}
          </button>
        </div>
      );
    };

export default Navbar
