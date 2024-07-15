import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
//}

//1 create context
export const AuthContext = createContext();

//2. custom function
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setemail] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = (token, email) => {
    console.log("handleLogin is RUNNING");
    setIsAuth(true);
    setToken(token);
    setemail(email);
    alert("Logged in seccessfully");
  };

  console.log(isAuth);

  const handleLogOut = () => {
    console.log("handleLogOut is RUNNING");
    setIsAuth(false);
    setToken("");
    setemail("");
    alert("Loged OUT seccessfully");
  };

  //3. Give Provider To AuthContext And Pass Props To Childrren
  //4 th step on Index.js for WRAPPIING
  return (
    <AuthContext.Provider
      value={{ handleLogOut, isAuth, email, token, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
