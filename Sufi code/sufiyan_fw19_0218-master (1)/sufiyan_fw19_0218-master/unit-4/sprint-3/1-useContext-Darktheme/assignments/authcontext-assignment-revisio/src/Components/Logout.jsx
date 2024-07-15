import { useContext } from "react";
import { AuthContext } from "../Context/AppContext";

function LogOut() {
  const { handleLogOut } = useContext(AuthContext);

  return <button onClick={handleLogOut}>LOGOUT</button>;
}

export default LogOut;
