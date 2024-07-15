import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashbord from './components/Dashbord';
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  
  const { isAuth,  LoginComponent } = useContext(AuthContext);
 

 console.log(isAuth)


 


 if(isAuth){
  return( 
      <div className="App">
      <Dashbord/>
      </div>
  )
 }


  return (
    <div className="App">
      
    { LoginComponent ? <Login  /> :   <Signup  /> }
  

    </div>
  );
}

export default App;
