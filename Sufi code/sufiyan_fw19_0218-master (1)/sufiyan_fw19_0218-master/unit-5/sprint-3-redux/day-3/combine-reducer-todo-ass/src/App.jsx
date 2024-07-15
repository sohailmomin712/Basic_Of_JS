
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import AuthRoute from './Private/AuthRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
             
      <Route path="/" element={ <Home/>} />
           <Route path="/calculator" 
           element={ <AuthRoute> <Counter/> </AuthRoute>  } />
           <Route path="/todo" 
           element={  <AuthRoute><Todo/></AuthRoute>} />
           <Route path="/login" element={  <Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;

// npm i redux react-redux redux-thunk
// npm i axios