import { useCallback, useState } from "react";

import Child from "./components/Child";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState("")

  
/// 1 ) memorise Component >>> child component 
/// 2 ) memorise Function >>> useCallback to function

  // update count is function its created and updated on every rerender
  // we passed it in child component so its also calling child component  and its re rendering 
  // so we used useCallback and passed function , and count in arg 
  // so only count changed will update function else it will stay in memory till next update
  /// first it was creates and destroy on every rerender 
  /// but now update count only change or update on count change 
  const updateCount = useCallback( ()=> setCount(count + 1), [ count ] )

  return (
    <div className="App">
      <h1>Count - {count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>

        <button onClick={() => setCount(count + 1)}>+</button>
<br/>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      </div>
      <Child  count={count}  updateCount={updateCount} />
    </div>
  );
}

export default App;
