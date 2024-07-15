import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "../pages/Calculator";


import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoutes";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <PrivateRoute> <Profile /> </PrivateRoute>  } />
        <Route path="/calculator" element={ <PrivateRoute> <Calculator /> </PrivateRoute>  } />
       

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
