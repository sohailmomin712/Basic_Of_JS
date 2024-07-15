import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

  // {
  //   "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"
  //}


//1 create context 
export const AuthContext =  createContext()

//2. custom function 
const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [email, setemail] = useState("")
    const [token, setToken] = useState(null)

 
    const Redirect = useNavigate()


    const handleLogin = (email,token) =>{


        console.log("handleLogin is running")

        setIsAuth(true)
        setToken(token)
        setemail(email)
        alert("Logged in seccessfully");
        Redirect("/")
           
      
    }

    console.log(isAuth,email,token)   

    return (

  
        <AuthContext.Provider value={{isAuth, handleLogin,email, token}} >
             {children}
        </AuthContext.Provider>
     
    )
}

export default AuthContextProvider




// import React from "react";
// import { useState } from "react";

// // 1 . context create 
// export const AuthContext = React.createContext()

// function fetchData(){

//     return fetch(`https://reqres.in/api/login`)
//    .then((res) => res.json());

// }


// console.log(fetchData)

// // 2. custom function 
// function AuthContextProviderComponent(props){

//     const [isAuth, setAuth] = useState(0)

//     const toggleAuth = ()=>{

//     }

//     return (
// // 3 . provider 
//         <AuthContext.Provider>
//              {props.children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContextProviderComponent