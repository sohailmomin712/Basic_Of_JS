import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import RestaurantPage from "./RestaurantPage";

function AllRoutes() {
  return <div>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
 
      <Route path="/dashboard" element={
        
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
      
      } />

      <Route path="/restaurants/:id" element={
             <PrivateRoute>
           <RestaurantPage />
             </PrivateRoute>
      
      } />

   </Routes>

    </div>;
}

export default AllRoutes;
