import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_total_action } from '../redux/todo/todo.action'

const Total = () => {

  const { total , uncomplete } = useSelector((store)=> store.todo )

  const dispatch = useDispatch()

  useEffect(()=>{
   
    dispatch(get_total_action())

  },[])
  
console.log(total)


  return (
    <div style={{margin:"auto", justifyContent:"center", textAlign:"center"}} >
          <h1 style={{color:"brown" , fontWeight:"bolder"}} >Total : {total}</h1>
          <h1 style={{color:"brown" , fontWeight:"bolder"}} >Pending : {uncomplete}</h1>
    </div>
  )
}

export default Total
