import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {

    const {toggleAuth, isAuth} = useContext(AuthContext)

    if(isAuth){
        return <Navigate to="/" />
    }


  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={toggleAuth} >LOGIN</button>
    </div>
  )
}

export default Login
