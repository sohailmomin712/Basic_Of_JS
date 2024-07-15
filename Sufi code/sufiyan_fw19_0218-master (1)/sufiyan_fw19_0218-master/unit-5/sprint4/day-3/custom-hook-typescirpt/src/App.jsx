import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'
import { StopWatch } from './components/StopWatch'
import { Watch2 } from './components/watch2'
import Post from './components/Post'


function App() {
 

  return (
    <div className="App">
     <Counter />
   {/* <StopWatch/>
    <Watch2/> */}
    <Post/>
    </div>
  )
}

export default App
