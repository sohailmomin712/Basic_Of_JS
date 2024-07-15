import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SingleRestaurantPage from "./SingleRestaurantPage";
import PrivateRoute from '../Components/PrivateRoute';
function AllRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/restaurants/:id" element={
        <PrivateRoute>
          <SingleRestaurantPage />
        </PrivateRoute>} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
    </Routes>

  )
}

export default AllRoutes;
