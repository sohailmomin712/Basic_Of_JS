import {Link} from "react-router-dom"

function Navbar(){

    return (

        <div style={{display:"flex" , width:"1000px" , justifyContent:"space-between"}} >
            <div>suFi-Assignment</div>

            <div style={{display:"flex" , gap:"100px", justifyContent:"space-between"}} >

            <p> <Link to="/">Home</Link></p>
            <p> <Link to="/Login">Login</Link></p>
            <p> <Link to="/Logout">Logout</Link></p>
            <p> <Link to="/UserDetail">UserDetail</Link></p>


            </div>

        </div>


    )

};


export default Navbar