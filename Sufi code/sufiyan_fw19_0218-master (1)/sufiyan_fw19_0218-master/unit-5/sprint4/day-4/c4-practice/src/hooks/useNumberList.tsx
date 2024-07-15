import { useEffect, useState } from "react";

const useNumberList = (initialArray: Array<number | string>) => {
  
  // TODO
  // refer readme.md for what to return

  
  const [list , setlist] = useState<Array<number| string>>(initialArray)
  const appendStart = (number: string)=>{
      // newList.unshift(+number)
    setlist([ +number, ...list])
  }

  const appendEnd = (number: string)=>{
    // newList.unshift(+number)
  setlist([...list, +number])
}

const popStart = (number: string)=>{
  
   let neWList = list
  neWList.shift()
  setlist([...neWList])


}

const popEnd = (number: string)=>{
 
  let neWList = list
  neWList.pop()
  setlist([...neWList])

}


const clear = ()=>{
  setlist([])
}


const reset = ()=>{
  setlist(initialArray)
}


  




  return {

   list: list  /** List of numbers */,
   appendStart: appendStart  /** Function to append element at start */,
   appendEnd: appendEnd  /** Function to append element at end of list */,
   popStart: popStart  /** Function to pop element at start of list */,
   popEnd:  popEnd /** Function to pop element at the end of list */,
   clear:  clear /** Function to clear the list and set it to empty */,
   reset:  reset /** Function to reset list values to the original values */
  };
 }
 export default useNumberList;

/*
 // return 
 //   list: /** List of numbers */
 //   appendStart: /** Function to append element at start */,
 //   appendEnd: /** Function to append element at end of list */,
 //   popStart: /** Function to pop element at start of list */,
 //   popEnd: /** Function to pop element at the end of list */,
 //   clear: /** Function to clear the list and set it to empty */,
 //   reset: /** Function to reset list values to the original values */
 // 