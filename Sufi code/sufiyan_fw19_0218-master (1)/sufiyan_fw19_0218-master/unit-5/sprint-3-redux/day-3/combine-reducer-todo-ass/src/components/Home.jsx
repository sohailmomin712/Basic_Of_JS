import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const {isAuth, token} = useSelector((store)=>store.auth)

    console.log(token)
  return (
    <div>
<br />

 <div style={{border:"1px solid", backgroundColor:"burlywood", color:"white"}} >
    <h1>{isAuth ? `${token}` : "not authenticated"}</h1>
    </div>
     <br />  
    </div>

  )
}

export default Home
