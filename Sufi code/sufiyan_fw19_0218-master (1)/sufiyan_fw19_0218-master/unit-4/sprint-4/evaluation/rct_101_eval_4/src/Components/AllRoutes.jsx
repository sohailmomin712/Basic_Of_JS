import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";



// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/cart"
     element={<PrivateRoute> <Cart/> </PrivateRoute>} />


  </Routes>;
};

export default AllRoutes;
