import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  label: string ;
  initialValues: number[] ;
};
const List2 = (props: List2Props) => {

  const { initialValues,  label  } = props
  
  const [ initialArray , setinitialArray ] = useState<Array<number>>(initialValues)
  const { list,   appendEnd, popStart,  clear, reset } = useNumberList(initialArray)

  const [number , setnumber ] = useState<string>("")



  return (
    <div data-testid="list2" style={{width:"100%", border:"1px solid", padding:"20px"}} >
      <h3 data-testid="list2-label">{label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div  style={{ justifyContent:"center",display:"flex", gap:"10px" }} >
        { 
            list?.map((el,i)=> (
              <div key={i} data-testid="list2-element">{el}</div>
            ))
        }
        </div>

      <input data-testid="list2-input" value={number} onChange={(e)=>setnumber(e.target.value)} /> <br/>
      <button data-testid="list2-btn-append-end"
      onClick={()=>{
        appendEnd(number)
        setnumber("")
      }}
      >
        Append End
        {/* Button to append new number to the end of the list */}
      </button>
      <button data-testid="list2-btn-pop-start"
       onClick={()=>{
        popStart()
        setnumber("")
      }}>
        Pop Start
        {/* Button to  pop first element of the list */}
      </button>
      <button data-testid="list2-btn-clear"
      onClick={()=>{
        clear()
        setnumber("")
      }}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset"
      onClick={()=>{
        reset()
        setnumber("")
      }}>
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
