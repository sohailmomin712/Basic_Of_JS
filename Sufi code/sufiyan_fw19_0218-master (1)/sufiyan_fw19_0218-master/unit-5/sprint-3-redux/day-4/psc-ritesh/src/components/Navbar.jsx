import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LogOut } from "../redux/auth/auth.actions";

const Navbar = () => {
  const isAuth = useSelector((store)=> store.auth.isAuth)
 const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      dispatch(LogOut())
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };

  
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleLoginClick}>
        {/* Spacer */}
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
