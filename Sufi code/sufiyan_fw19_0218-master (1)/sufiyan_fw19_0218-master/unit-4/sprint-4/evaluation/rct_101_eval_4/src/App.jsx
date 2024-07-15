import Navbar from "./Components/Navbar"

import AllRoutes from "./Components/AllRoutes"
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack>
      <Navbar />
      <AllRoutes />
    </VStack>
  );
}

export default App;
