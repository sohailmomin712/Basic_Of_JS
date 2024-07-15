import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import LogOut from "../Components/Logout";
import { UserDetail } from "../Components/UserDetail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/userdetails" element={<UserDetail />} />
    </Routes>
  );
};

export default AllRoutes;
