import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 

  // {
  //   "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"
  // "password": "pistol"
  //}



export const AppContext = createContext()


// loginUser
// logoutUser

function AppContextProvider({children}) {

    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState(null)

    const Redirect = useNavigate()

    const loginUser = (token)=>{

        console.log("handleLogin is running")
        setIsAuth(true)
        setToken(token)
      //  alert("Logged in seccessfully");
        Redirect("/dashboard")
    }

    const logoutUser  = ()=>{

        setIsAuth(false)
        setToken(null)
    }

    console.log(isAuth)

return (
    
    <AppContext.Provider value={{isAuth ,logoutUser, token, loginUser}} >
    {children}
    </AppContext.Provider>

)



}

export default AppContextProvider;
