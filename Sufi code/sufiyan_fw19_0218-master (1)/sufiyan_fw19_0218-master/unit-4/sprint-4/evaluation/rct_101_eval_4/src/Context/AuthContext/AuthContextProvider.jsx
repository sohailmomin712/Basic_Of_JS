import React, { createContext, useReducer } from "react";
import reducer from "./reducer";



export const AuthContext = createContext()

const initValue = {
  authStatus : false,
  token : null,
  isError : false,
  isLoading : false 
}

const AuthContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer,initValue)

  return <AuthContext.Provider value={{state,dispatch}} >
         {children}
  </AuthContext.Provider>
};

export default AuthContextProvider;
