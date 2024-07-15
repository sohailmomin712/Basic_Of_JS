import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthRoute = ({children}) => {

  const {isAuth} = useSelector((store)=>store.auth)
    
    const { pathname } = useLocation();
 

    if (isAuth) {
      return children;
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
    
}

export default AuthRoute
