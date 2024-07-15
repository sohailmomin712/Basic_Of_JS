import { Route, Routes } from "react-router-dom"
import Products from "./Products"
import { SingleProductPage } from "./SingleProductsPage"

export  const AllRoutes=()=>{
  return(
    <div>

<Routes>
  <Route path='/'  element={<h1>Home</h1>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/login' element={<h1>Login</h1>}/>
  <Route path='/user' element={<h1>USer</h1>}/>
  <Route path='/products/:id' element={<SingleProductPage/>}/>
  
</Routes>

    </div>
  )
}