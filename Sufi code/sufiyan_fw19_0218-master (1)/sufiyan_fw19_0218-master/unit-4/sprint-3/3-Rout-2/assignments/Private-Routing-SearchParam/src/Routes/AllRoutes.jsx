import { Route, Router, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import LogOut from "../Components/LogOut";
import ProductPage from "../Components/ProductPage";
import SingleProductPage from "../Components/SingleProductPage";
import SingleUserPage from "../Components/SingleUserPage";
import UsersPage from "../Components/UsersPage";



function AllRoutes(){




    return (


        <div>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
           
                <Route path="/users" element={<UsersPage />} />
                <Route path="/users/:id" element={<SingleUserPage />} />
                
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:id" element={<SingleProductPage />} />

                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<LogOut />} />

            </Routes>

        </div>

    )
}

export default AllRoutes