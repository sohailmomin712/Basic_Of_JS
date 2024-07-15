import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  decreament, increament } from '../redux/counter/counter.action';
import { useState } from 'react';


const Counter = () => {

    
  // useSelector is read only we cant update any state with this 
 const count = useSelector((state)=> state.counter.count )

 const dispatch = useDispatch()

 const [value , setValue] = useState(0) 

  return (
    <div>
               <div> <h1>{count}</h1> </div>
        
        <div>
        
        <input value={value} onChange={(e)=> setValue(Number(e.target.value)) }  type="text" />
        <br />
        <button onClick={()=> dispatch( increament())} >INC</button>
        <button onClick={()=> dispatch( decreament())} >DEC</button>
        <button onClick={()=> {
          dispatch( increament(value) )
          setValue(0)
        }} >INC by Vlaue</button>
        <button onClick={()=>  {
          dispatch( decreament(value) )
          setValue(0)
        }} >DEC by Vlaue</button>
        </div>
    </div>
  )
}

export default Counter
