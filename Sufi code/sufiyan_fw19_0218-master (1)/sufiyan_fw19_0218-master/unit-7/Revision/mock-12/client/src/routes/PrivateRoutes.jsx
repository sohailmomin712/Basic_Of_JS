import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

  const  { isAuthenticated, token,  loading , error } = useSelector((store)=> store.auth)

  if (!isAuthenticated) {
    return alert("You Need To Login First"), (<Navigate to="/login" />);
  }

  return children;
}

export default PrivateRoute;
