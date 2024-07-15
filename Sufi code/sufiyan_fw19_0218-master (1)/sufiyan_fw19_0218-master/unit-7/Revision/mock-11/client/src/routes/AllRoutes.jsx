import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashbord from "../pages/Dashbord";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoutes";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <PrivateRoute> <Dashbord /> </PrivateRoute>  } />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
