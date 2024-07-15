
import './App.css';
import { useState } from 'react';
import { Box, Text, HStack, Button, VStack } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {

  const [AdminTrue, setAdminTrue] = useState(false)


  return (
    <Box bg={"#f2f6ff"} h="100vh" className="App">

     <Navbar/>
     <AllRoutes/>
       
       
    
     
    </Box>
  );
}

export default App;
