import { Route, Routes } from "react-router-dom"
import ProductCard from "../Components/ProductCard"
import Products from "../Components/Products"
import SingleProductCard from "../Components/SingleProductCard"


const AllRoutes = ()=>{
    

    return (

     <Routes>

         <Route path="/"  element={<h1>HOME</h1>}  />
         <Route path="/products"  element={<Products/>}  />
         <Route path="/products/:id"  element={<SingleProductCard />}  />
         <Route path="/login"  element={<h1>Login</h1>}  />
         <Route path="/about"  element={<h1>About</h1>}  />
         <Route path="/cart"  element={<h1>cart</h1>}  />
         <Route path="/payment"  element={<h1>Payment</h1>}  />
            
     </Routes>

    )

}

export default AllRoutes