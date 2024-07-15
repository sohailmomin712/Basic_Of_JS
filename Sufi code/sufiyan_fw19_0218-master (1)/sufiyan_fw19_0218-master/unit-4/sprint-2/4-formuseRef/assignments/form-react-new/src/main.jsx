import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import AppContextProvider from './Context/AppContext'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
  <BrowserRouter>
  <ChakraProvider>

    <App />
  </ChakraProvider>
  </BrowserRouter>
 
  </AppContextProvider>
)
