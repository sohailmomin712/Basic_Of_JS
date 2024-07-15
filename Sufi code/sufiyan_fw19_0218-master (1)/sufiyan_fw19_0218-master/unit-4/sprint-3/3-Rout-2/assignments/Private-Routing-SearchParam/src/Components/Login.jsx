import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import styles from "./Navbar.module.css"


function Login(){

    const {isAuth, toggleAuth} = useContext(AuthContext)

    if(isAuth){

        // if true 
        alert("User Logged in ")
        alert("Going To users Page" )
        return <Navigate to="/users" />
    }


    return (
        
      
        <>
        <h1>Login PAGE</h1>
        <p>USer Should Log in First</p>
        <div>
            <button className={styles.buttonS}  onClick={toggleAuth} >
                LOGIN
            </button>
        </div>
        </>

    )


}

export default Login