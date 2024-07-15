
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SingleTodo from './components/SingleTodo'
import TodoList from './components/TodoList'
import Total from './components/Total'

function App() {
  

  return (
    <div className="App">
     <Navbar/>

     <Routes>

     <Route path='/'  element={<Home/>}  />
     <Route path='/todo'  element={<TodoList/>}  />
     <Route path='/total'  element={<Total/>}  />
     <Route path='/todo/:id'  element={<SingleTodo/>}  />

     </Routes>


    </div>
  )
}

export default App


// json-server --watch db.json --port 8060

// npm i redux react-redux redux-thunk
// npm i axios
// npm i react-router-dom

