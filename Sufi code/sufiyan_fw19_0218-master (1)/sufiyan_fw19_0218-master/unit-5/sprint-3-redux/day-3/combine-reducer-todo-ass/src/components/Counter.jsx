import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, divide, increment, multiply } from '../redux/Counter/counter.action'



const Counter = () => {

 // useSelector is read only we cant update any state with this 

 const count = useSelector((state)=> state.counter.count)

 const dispatch = useDispatch()
 const [value , setValue] = useState(0) 

  return (
    <div>
      
      <div style={{border:"1px solid", backgroundColor:"red", color:"white"}} ><h1>{count}</h1></div>
      <br />
      <input value={value} onChange={(e)=> setValue(Number(e.target.value)) }  type="number" /> 
       <button onClick={()=> dispatch(increment()) }> ADD + 1  </button>
         <button onClick={()=> dispatch(decrement()) }> REDUCE - 1</button> 
 

      <div> 
       

         <button onClick={()=> {
            dispatch(increment(value))
            setValue(0)
         } }> ADD By Value  </button>
   
         <button onClick={()=> {
            dispatch(decrement(value))
            setValue(0)
         } }> Substract By Value </button> 
      

         <button onClick={()=> {
            dispatch(multiply(value))
            setValue(0)
         } }> Multiply By Value </button> 
      
         
         <button onClick={()=> {
            dispatch(divide(value))
            setValue(0)
         } }> Divite By Value </button> 
         <br />


      </div>



    </div>
  )
}

export default Counter
