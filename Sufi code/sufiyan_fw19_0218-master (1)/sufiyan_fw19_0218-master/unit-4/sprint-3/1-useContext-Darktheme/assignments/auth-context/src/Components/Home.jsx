import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"



function Home(){

    const { isAuth, email, token } = useContext(AuthContext)
 

    if (isAuth){

        return(
            <>
            <h1> User Is Logged In </h1>
            <h1>Email : {email}</h1>
            <h1> Token : {token} </h1>
            </>
        )

    }


    return (

   <div>HOME</div>
   

    )


}

export default Home