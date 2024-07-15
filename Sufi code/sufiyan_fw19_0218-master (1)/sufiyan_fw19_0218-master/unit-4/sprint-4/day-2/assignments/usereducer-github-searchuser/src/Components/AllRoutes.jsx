import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import GitHub from './GitHub'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/MygitHub/user/" />} />
        <Route path='/MygitHub/user/' element={<GitHub/>}/>
    </Routes>
  )
}

export default AllRoutes
