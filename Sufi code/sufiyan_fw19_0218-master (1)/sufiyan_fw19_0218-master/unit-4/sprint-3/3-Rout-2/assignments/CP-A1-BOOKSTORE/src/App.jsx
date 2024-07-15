import { useState } from "react";
import BookCard from "./components/BookCard";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";




function App() {
 const [fiction,setfiction]=useState(true)

//  function changeBooks(){


//  }
//  console.log(data)


  return (
    <div>
      <h1>Mini Book Store</h1>

      <button onClick={()=>setfiction(!fiction)} data-testid="toggle-btn">{fiction ? "Non-Fiction Books" : "Fictional Books"} </button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        
          {fiction ? <Fiction/> :   <NonFiction />  }
        
      
       
       
      </div>
    </div>
  );
}

export default App;
