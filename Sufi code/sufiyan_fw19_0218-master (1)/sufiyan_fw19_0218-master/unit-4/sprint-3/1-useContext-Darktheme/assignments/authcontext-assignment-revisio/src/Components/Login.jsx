import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AppContext";

// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
//}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPass] = useState("");

  const { handleLogin } = useContext(AuthContext);

  const handleClickLogin = () => {
    console.log("handleLoginClick is Running");

    const userLoginData = {
      email,
      password
    };

    console.log(userLoginData);

    axios
      .post("https://reqres.in/api/register", userLoginData)
      .then((res) => {
        console.log(res);
        handleLogin(res.data.token, email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //console.log(email, pass);

  return (
    <div>
      <input
        value={email}
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        value={password}
        type="text"
        placeholder="password"
        onChange={(e) => SetPass(e.target.value)}
      />
      <br />
      <button onClick={handleClickLogin}>LOGIN</button>
    </div>
  );
};
