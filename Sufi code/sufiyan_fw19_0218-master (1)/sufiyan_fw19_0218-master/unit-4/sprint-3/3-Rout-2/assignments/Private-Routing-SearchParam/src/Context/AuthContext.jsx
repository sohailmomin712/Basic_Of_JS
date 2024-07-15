
// rfce
import React, { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'


// step 1 createContext
export const AuthContext = createContext()


// step 2 custom function 
function AuthContextProvider({children}) {

      
      //// for authantication
      const [isAuth, setAuth] = useState(true) ;

      const toggleAuth = ()=> {
        // true become false % false become true
         setAuth(!isAuth)
       }
     

  return (

    <div>

        <AuthContext.Provider value={{isAuth, toggleAuth}}>

            {children}

        </AuthContext.Provider>

    </div>


  )
}

export default AuthContextProvider
