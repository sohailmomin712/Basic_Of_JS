import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import { Box, Image, VStack } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App" h="100%" bg={"blackAlpha.100"}>
      <Navbar /> 
      <AllRoutes/>
      <VStack>
      </VStack>
     <h1>100% FUNCTIONALITY DONE ... Compelete BACKEND</h1>
     <h1>COPY : @masaischool.com</h1>
     <h1>ROLE BASE ACCESS , shown on NAVBAR</h1>
   
     <p>REGISTER and Check dont check old data</p>

     <a href='https://mock13-backend-hbez.onrender.com/user' target={"_blank"} >https://mock13-backend-hbez.onrender.com/user</a>
     <a href='https://mock13-backend-hbez.onrender.com/jobs' target={"_blank"} >https://mock13-backend-hbez.onrender.com/jobs</a>
    </Box>
  );
}

export default App;







// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

// npm i react-icons

// npm i redux react-redux redux-thunk
// npm i axios

// npm i d3
