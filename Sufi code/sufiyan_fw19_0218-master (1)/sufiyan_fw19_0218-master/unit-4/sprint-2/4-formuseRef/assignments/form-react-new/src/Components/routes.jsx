import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CompletedApp from './Completed'
import SingleEmployePage from './SingleEmployePage'


const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<CompletedApp />} />
        <Route path='/employee/:id' element={<SingleEmployePage />} />
        

      
    </Routes>
  )
}

export default AllRoutes
