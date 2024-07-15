import React from "react";
import { useMemo } from "react";

import { memo } from "react";


// count is primitive datatype
const Child = ({count, updateCount}) => {
  console.log("Child is rendered");


  /// reduced computing
  console.time("t1")
    let number = useMemo(()=> {
  
      let answer ;
      for(let a=1; a< 50000000 * 5; a++){
        answer = a
      }
      return answer
  
    }, [])
  console.timeEnd("t1")

  
  return (
    <div
      style={{
        display: "inline-block",
        margin: "30px",
        padding: "30px",
        border: "1px solid black",
      }}
    >

      <h1>Child - {count} - {number}</h1>
      <button onClick={updateCount} >+</button>
    </div>
  );
};

export default memo(Child);

// another method instead of useCallback

{/*  

const areEqual = (prevProps, nextProps) =>{

  // false => rerender
  // true => no-rerender

  if(prevProps.count === nextProps.count){
    return true ;
  }
  return false 
}

export default memo(Child, areEqual );

*/}