import { useEffect } from "react";
import { createContext, useState } from "react";

//1 create context
export const AuthContext = createContext();

//2. custom function
const AuthContextProvider = ({ children }) => {

    
  const [Data, SetData] = useState([])
  const [userID, setuserID] = useState(0)

  const [isAuth, setIsAuth] = useState(false);
  const [ Loading, setLoading] = useState(true)



  const URL = "https://json-server-3spu.onrender.com/api/users"

  const [LoginComponent, setLoginComponent] = useState(true)


  useEffect(()=>{
  setLoading(true)
   fetch(URL)
   .then((res)=> res.json())
   .then((res)=> {
    SetData([...res])
    setLoading(false)
   })
   .catch((e)=> console.log(e.message))

   //let LocalToken = JSON.parse(localStorage.getItem("token")) || false
  // const check = (LocalToken!=undefined)
  // console.log("object", LocalisAuth)
   // setIsAuth(check)
  },[isAuth,LoginComponent])

  


  const handleLogin = ({userName , passWord}) => {
   // console.log("handleLogin is RUNNING" , userName , passWord);

   let User = Data.find((el)=> el.username == userName)

   if(!User){
    return alert("User Not Exist Register First")
   }

   if(User.password != passWord){
    return alert("Wrong Credencial")
   }

   setIsAuth(true)
 //  setuserNameAuth(User.username)
 setuserID(User.id)
   setLoginComponent(false)
   //localStorage.setItem("token", User.id);
   //console.log(User.username)
   alert("Logged in seccessfully")

 //  setIsAuth(true);

 //  alert("Logged in seccessfully");
  };

 // console.log(isAuth);




  const handleLogOut = () => {
    console.log("handleLogOut is RUNNING");
   
    
    setuserID(0)
    setLoginComponent(true)
    setIsAuth(false);
    
    alert("Logged OUT seccessfully");
  };



  return (
    <AuthContext.Provider
      value={{Data, handleLogOut, isAuth,  handleLogin, userID,
    LoginComponent, setLoginComponent, Loading, setLoading
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
