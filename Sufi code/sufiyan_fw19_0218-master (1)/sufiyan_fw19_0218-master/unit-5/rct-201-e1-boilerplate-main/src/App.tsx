import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">

      {/* Clock */}
      <Clock   />
  
     <List1  initialValues={[1, 2, 3]} label="List 1" />
     <List2  initialValues={[4, 5]} label="List 2"  />

      <h4>Insert Numbers ... 100%  Functionality Working</h4>
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
