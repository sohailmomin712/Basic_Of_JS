import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContextProvider from './Context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeContextProvider>
    <App />

    </ThemeContextProvider>

)
