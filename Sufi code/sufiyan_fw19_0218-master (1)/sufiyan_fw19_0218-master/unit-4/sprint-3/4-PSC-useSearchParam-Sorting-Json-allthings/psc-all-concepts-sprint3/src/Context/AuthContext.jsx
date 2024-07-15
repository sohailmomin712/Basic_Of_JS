import React, { useState } from 'react'
import { createContext } from 'react'


export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)

    const toggleAuth = ()=>{
        setIsAuth(!isAuth)
    }

  return (
    <AuthContext.Provider value={{toggleAuth, isAuth}} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
