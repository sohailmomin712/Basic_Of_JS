import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom"

export const Home =()=>{

  return (
    <h1>Home Page</h1>
  )
}


export const Contact  =()=>{

  return (
    <h1>Contact Page</h1>
  )
}


export const About =()=>{

  return (
    <h1>About Page</h1>
  )
}


export const Services  =()=>{

  return (
    <h1>Services Page</h1>
  )
}

export const Login   =()=>{

  return (
    <h1>Login Page</h1>
  )
}

export const AllRoutes =()=>{

  return (

    <>
    <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="/contact" element={ <Contact/> } />
     <Route path="/about-us" element={ <About/> } />
     <Route path="/services" element={ <Services/> } />
     <Route path="/login" element={ <Login/> } />
    </Routes>
    </>
    
  )

}



function App() {
  return <BrowserRouter>
         <NavBar />
         <AllRoutes />
  </BrowserRouter>;
}

export default App;
