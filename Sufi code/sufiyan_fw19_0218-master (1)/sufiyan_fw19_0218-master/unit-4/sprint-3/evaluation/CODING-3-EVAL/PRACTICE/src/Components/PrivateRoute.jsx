import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { isAuth } = useContext(AppContext);
    if (!isAuth) {
        return (
            <Navigate to='/Login' />
        );
    };
    return children;
}

export default PrivateRoute;
