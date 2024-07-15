import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminListingPage from "../pages/AdminList";
import AdminPages from "../pages/AdminPages";
import JobPage from "../pages/JobPage";



import Login from "../pages/Login";
import MyJobs from "../pages/MyJobs";

import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoutes";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ < Login/> } />
      
        
        <Route path="/jobpage" element={ <PrivateRoute> < JobPage/> </PrivateRoute>  } />

    
        <Route path="/myjobs" element={ <PrivateRoute> < MyJobs/> </PrivateRoute>  }/>
        

        <Route path="/adminformpage" element={ <PrivateRoute> < AdminPages/> </PrivateRoute>  } />
        <Route path="/adminlistingpage" element={ <PrivateRoute> < JobPage/> </PrivateRoute>  } />


        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
