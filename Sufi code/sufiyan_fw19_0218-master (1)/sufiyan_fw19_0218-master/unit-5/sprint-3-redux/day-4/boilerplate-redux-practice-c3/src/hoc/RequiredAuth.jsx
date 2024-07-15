import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";




const RequiredAuth = ({ children }) => {

  const {data} = useSelector((store)=>store.auth)
  const { isAuthenticated} = data
  
  const { pathname } = useLocation();

  if(isAuthenticated){
    return children
  }

  return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
};

export default RequiredAuth;
