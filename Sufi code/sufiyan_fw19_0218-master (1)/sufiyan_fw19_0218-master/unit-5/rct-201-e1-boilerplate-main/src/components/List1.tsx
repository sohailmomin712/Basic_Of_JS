import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  label: string ;
  initialValues: number[] ;
};

const List1 = (props: List1Props) => {

  const { initialValues,  label  } = props
  
  const [ initialArray , setinitialArray ] = useState<Array<number>>(initialValues)
  const { list, appendStart, popEnd,  clear, reset } = useNumberList(initialArray)

  const [number , setnumber ] = useState<string>("")




  return (
    <div data-testid="list1" style={{width:"100%", border:"1px solid", padding:"20px"}}  >
      <h3 data-testid="list1-label">{label}</h3>
      {/* Iterate List and wrap the element div below inside */}
    

        <div  style={{ justifyContent:"center",display:"flex", gap:"10px" }} >
          { 
          list?.map((el)=> (
            <div data-testid="list1-element">{el}</div>
          ))
           }
        </div>
      

      
      <input data-testid="list1-input" value={number} onChange={(e)=>setnumber(e.target.value)}  /> <br />
      <button data-testid="list1-btn-append-start" onClick={()=>{
        appendStart(number)
        setnumber("")
      }} >
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" 
      onClick={()=>{
        popEnd()
        setnumber("")
      }} >
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear" 
      onClick={()=>{
        clear()
        setnumber("")
      }}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" 
      onClick={()=>{
        reset()
        setnumber("")
      }}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
