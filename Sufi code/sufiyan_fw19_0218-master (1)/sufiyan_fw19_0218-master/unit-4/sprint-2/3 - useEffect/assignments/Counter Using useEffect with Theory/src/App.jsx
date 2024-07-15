import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




function App() {

  const [count, setCount] = useState(0)

  console.log(`1`, Date.now());
  // // after render
  // // side effect

  // callback, dependencies
  // the useEffect is not dependent on anything

  useEffect(()=>{
    document.title = `User Clicked ${count} times`

    console.log("after useEffect")
  },[count])
  
  // if we add empty array as a dependancy in 
  // use affect arguement page will load once UI load or refresh the page
  // if we added count as a dependanci page will load when Count Change

    // MOUNTING
  // ONLOAD, ON MOUNT
  // ONCOM

  console.log(`2`);



  return (
    <div className="App">
   <p>TO Understand useEffect Example</p>
   <hr />



   <h1>{`Clicked   ${count}  times`}</h1>
   <button onClick={()=> setCount(count + 1)} >ADD</button>



   <br /> <hr />
   <h3>Click on the Button Page Title Will Change</h3>

 <hr />

<p> [ empty array ]  .........if we add empty array as a dependancy in 
   use affect arguement page will load once UI load or refresh the page
   </p>
<p> [ count ] .........  if we added count as a dependanci page will load when Count Change

    // MOUNTING
  // ONLOAD, ON MOUNT</p>


   <br />
   <p>  // // after render
  // // side effect

  // callback, dependencies
 </p>
 <p> // the useEffect is not dependent on anything</p>
    </div>
  )
}

export default App
