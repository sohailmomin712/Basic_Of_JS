import logo from './logo.svg';
import './App.css';
import React from "react"
import Posts from "./Post/Post"
function App() {

  
  const [text , setText] = React.useState("")
  const [Todos , setTodos] = React.useState([])

  const HandleAdd = ()=>{

    setTodos([
      ...Todos,
      {
        id: Date.now().toString(),
        title: text,
        status: false,

      }
    ])
  }

  console.log(Todos)
  
  return (
    <div className="App">
   
 <Posts />

    </div>
  );
}

export default App;
