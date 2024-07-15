
import Timer from "./Components/Timer";
import { useState } from "react";
import "./App.css"


export default function App() {

  const [show, setShow] = useState(false);

  

  return (


    <div className="App">
      <h1>Example of Unmount in UseEffect</h1>
      {show === true && <Timer />}

      <button onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</button>
    </div>


  );
}
