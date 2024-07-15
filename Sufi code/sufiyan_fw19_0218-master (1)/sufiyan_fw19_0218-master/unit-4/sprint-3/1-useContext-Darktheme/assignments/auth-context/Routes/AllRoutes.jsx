import { Route, Routes } from "react-router-dom";
import Home from "../src/Components/Home";
import Login from "../src/Components/Login";
import UserDetail from "../src/Components/UserDetails";


function AllRoutes(){



    return (
        <div>

           <Routes>

             <Route path="/" element={ <Home/> } />
             <Route path="/Login" element={<Login/>} />
             {/*   <Route path="/Logout" element={} /> */}
            <Route path="/UserDetail" element={ <UserDetail /> } /> 

           </Routes>


        </div>
    )
}


export default AllRoutes
