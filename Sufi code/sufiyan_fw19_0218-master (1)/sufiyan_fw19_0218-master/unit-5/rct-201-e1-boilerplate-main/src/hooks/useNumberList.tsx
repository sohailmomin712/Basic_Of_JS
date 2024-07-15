import { useState } from "react";

const useNumberList = (initialArray: number[]) => {

  const [ data , setData ]= useState<Array<number>>( initialArray )


 const appendStart = (number : string)=>{

       setData([ +number, ...data ])   
 }
 const appendEnd = (number : string)=>{
  setData([ ...data ,  +number])   
 }
 const popStart = ()=>{
    const newData = data
    newData.shift()
    setData([...newData])
 }
 const popEnd = ()=>{
  const newData = data
    newData.pop()
    setData([...newData])
 }
 const clear = ()=>{
  setData([])
 }
 const reset = ()=>{
  setData([...initialArray])
 }

  return {
    list: data ,
    appendStart: appendStart,
    appendEnd: appendEnd,
    popStart: popStart ,
    popEnd: popEnd ,
    clear: clear ,
    reset: reset 
  };

};

export default useNumberList;
