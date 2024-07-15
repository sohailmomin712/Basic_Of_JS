import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


function PrivateRoute({children}) {

    const {authState} = useContext(AppContext)

    const {isAuth} = authState

    return isAuth ? (
        children
    ) : (
        <Navigate to="/login" />
    )


}

export default PrivateRoute;
