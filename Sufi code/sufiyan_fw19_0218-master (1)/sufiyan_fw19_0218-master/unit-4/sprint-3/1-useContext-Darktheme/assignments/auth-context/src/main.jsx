import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContextProviderComponent from "./Context/AuthContext"
import {BrowserRouter} from "react-router-dom"
import AuthContextProvider from './Context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(

//step 1 Browser Router

 <BrowserRouter>

    <AuthContextProvider>
          <App />
    </AuthContextProvider>

   

 </BrowserRouter>


   

  
)
