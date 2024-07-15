import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoApp from './components/TodoApp'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
      <TodoApp/>
    </div>
  )
}

export default App
