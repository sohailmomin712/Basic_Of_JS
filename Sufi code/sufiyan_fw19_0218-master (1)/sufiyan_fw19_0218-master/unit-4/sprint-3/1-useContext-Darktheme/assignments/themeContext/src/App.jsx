import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import ToggleComp from './Components/toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <ToggleComp />
    </div>
  )
}

export default App
