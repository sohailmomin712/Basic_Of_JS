
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, decreament, increament } from './redux/action';
import { ADD_TODO } from './redux/actionTypes';



function App() {

  // useSelector is read only we cant update any state with this 
 const {count , todos } = useSelector((state)=> state )

 const dispatch = useDispatch()

 const [value , setValue] = useState(0) 
 const [todo , settodo] = useState("") 

 
 return (
    <div className="App">


     <div> <h1>{count}</h1> </div>

        <div>
       
        <input value={value} onChange={(e)=> setValue(Number(e.target.value)) }  type="text" />
        <br />
        <button onClick={()=> dispatch( increament())} >INC</button>
        <button onClick={()=> dispatch( decreament())} >DEC</button>
        <button onClick={()=> {
          dispatch( increament(value) )
          setValue(0)
        }} >INC by Vlaue</button>
        <button onClick={()=>  {
          dispatch( decreament(value) )
          setValue(0)
        }} >DEC by Vlaue</button>
        </div>

        <br /><br /><br />

        <input 
         value={todo} 
         onChange={(e)=> settodo(e.target.value) } 
         type="text" />
        <div>
          {
            todos?.map((el,i)=>(
              <p key={i}> {el} </p>
            ))
          }

        </div>

        <button onClick={()=> dispatch(addTodo(todo))} >ADD</button>

     
    </div>
  );
}

export default App;
