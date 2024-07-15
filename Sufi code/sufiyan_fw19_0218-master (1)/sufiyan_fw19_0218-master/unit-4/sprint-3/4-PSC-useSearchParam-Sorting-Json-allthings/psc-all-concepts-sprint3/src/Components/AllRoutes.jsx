import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NotFoundPage from '../Pages/NotFoundPage'
import Products from '../Pages/Products'
import SingleProductPage from '../Pages/SingleProductPage'
import PrivateRout from './PrivateRout'

const AllRoutes = () => {

  return (
    <Routes>

    <Route path='/' element={
        <PrivateRout>

        <Home />
    </PrivateRout>
    } />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/login' element={<Login />} />
    <Route path='/products' element={
    <PrivateRout>

        <Products />
    </PrivateRout>
    
    } />
    <Route path='/products/:id' element={
         <PrivateRout>

         <SingleProductPage />
     </PrivateRout>
     
    } />
    <Route path='*' element={<NotFoundPage />} />
</Routes>
  )
}

export default AllRoutes
