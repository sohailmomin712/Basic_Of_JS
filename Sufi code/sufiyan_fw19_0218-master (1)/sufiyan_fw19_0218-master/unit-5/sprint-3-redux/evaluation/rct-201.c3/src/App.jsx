import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return <div className="App">
    
    {/* code here */}
    <Navbar/>

    <Routes>

      <Route  path="/" element={ <RequiredAuth> <Home/> </RequiredAuth> }  />
      <Route  path="/login" element={ <Login/> } />
      
    </Routes>
  
    </div>;


}

export default App;


// json-server --watch db.json --port 8080
// npm i redux react-redux redux-thunk
// npm i typescript
// npm i axios
// npm i react-router-dom