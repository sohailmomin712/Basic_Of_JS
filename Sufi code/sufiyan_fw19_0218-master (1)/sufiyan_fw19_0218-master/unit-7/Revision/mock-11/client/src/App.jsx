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
      <Image w={"200px"} src='https://i.pinimg.com/originals/e0/0f/53/e00f538bef44b55164875182aa09a1d1.gif' />
      </VStack>
     
    </Box>
  );
}

export default App;


// npm i uuid


// npm i react-beautiful-dnd

// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

// npm i react-icons

// npm i redux react-redux redux-thunk
// npm i axios



