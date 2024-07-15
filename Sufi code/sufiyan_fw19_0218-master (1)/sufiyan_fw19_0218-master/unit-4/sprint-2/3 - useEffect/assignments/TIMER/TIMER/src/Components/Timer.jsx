
import { useState, useEffect } from "react"


function Timer() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {

    const id = setInterval(() => {
      console.log(`callback invoked, time is ${Date.now()}`);

      setCounter((counter) => counter + 1);

    }, 1000);

    const cleanup = () => {
      clearInterval(id);
    };

    return cleanup;
  }, []);

  
  return (
    <div>
      <h3>Count : {counter}</h3>
    </div>
  );
}


export default Timer;
