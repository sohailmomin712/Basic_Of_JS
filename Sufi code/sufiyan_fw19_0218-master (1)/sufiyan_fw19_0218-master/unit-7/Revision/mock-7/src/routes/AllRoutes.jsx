import React from 'react'
import { Route, Routes } from "react-router-dom";
import DataPage from '../components/DataPage';
import Home from '../components/Home';
import Login from '../components/Login';
import ReporPage from '../components/ReporPage';
import User from '../components/User';
import PrivateRoute from './PrivateRoute';


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/user-section" element={<User />} />
      <Route path="/admin-login-section" element={<Login />} />

      <Route path="/data-dogs-section" element={
      <PrivateRoute><DataPage /> </PrivateRoute>} />
      <Route path="/report-login-section" element={
      <PrivateRoute><ReporPage /> </PrivateRoute>} />
    </Routes>
  );
}

export default AllRoutes
