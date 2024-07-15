import { useContext } from "react";
import { AuthContext } from "../Context/AppContext";

export const Home = () => {
  const { isAuth, email, token } = useContext(AuthContext);

  console.log(isAuth);

  if (isAuth) {
    return (
      <div>
        <h1>HOME</h1>
        <h1>Email : {email}</h1>
        <h1>Token : {token}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>HOME</h1>
      <h1>No User Logged In</h1>
    </div>
  );
};
