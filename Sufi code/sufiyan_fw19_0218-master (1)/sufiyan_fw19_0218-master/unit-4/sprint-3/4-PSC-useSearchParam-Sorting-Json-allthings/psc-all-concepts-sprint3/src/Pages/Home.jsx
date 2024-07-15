import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Home = () => {

    const {isAuth, toggleAuth} = useContext(AuthContext)

  return (
   <div>
    <h1>HOME</h1>
    <button onClick={toggleAuth} >LOGOUT</button>
   </div>
   
  )
}

export default Home
