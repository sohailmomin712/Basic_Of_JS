

//https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/5
// https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=5&filter

import { createContext, useState } from "react";

export const AppContext= createContext()


function AppContextProvider({children}) {

   

   const [authState, setauthState] =
    useState({isAuth:false,token:null})

  //  const [token , setToken] = useState(null)

    const loginUser = (Newtoken)=>{

        setauthState({isAuth:true,token:Newtoken})

        //setToken(Newtoken)
    }

  const logoutUser  = ()=>{
    setauthState({isAuth:false,token:null})
  }

    return (
    <AppContext.Provider value={{authState, loginUser,logoutUser}} >
            {children}
    </AppContext.Provider>
    )

}

export default AppContextProvider;
