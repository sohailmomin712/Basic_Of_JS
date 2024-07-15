import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    

  useEffect(()=>{

    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
    })

  },[])

  return (
    <div className="App">
     
    </div>
  )
}

export default App
