import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import styles from "./Navbar.module.css"


function LogOut(){

    const {isAuth, toggleAuth} = useContext(AuthContext)

    if(!isAuth){

        // if true 
        alert("User Loged OUT ")
        alert("Going To Home Page" )
        return <Navigate to="/" />
    }


    return (
        
      
        <>
        <h1>LOGOUT PAGE</h1>
       
        <div>
            <button className={styles.buttonS}  onClick={toggleAuth} >
                Logout
            </button>
        </div>
        </>

    )


}

export default LogOut