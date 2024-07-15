import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { get_Todo_Action } from '../redux/todo/todo.action'

const Navbar = () => {

  const { total , uncomplete } = useSelector((store)=> store.todo)

  const dispatch = useDispatch()

  const [ Fetch, setFetch ] = useState(false)

  const navigate = useNavigate()

  useEffect(()=>{
   
      dispatch(get_Todo_Action())
     
  },[])

  return (
    <div   

     style={{ padding: "20px", display: "flex", gap: "50px", backgroundColor:"hsl(33, 53%, 54%)", color:"yellow", fontSize:"25px", fontWeight:"bolder" }}>
    Navbar:
    <Link to="/" style={{textDecoration:"none", color:"white", fontWeight:"bold", fontSize:"25px"}} >Add Todo</Link>
    <Link to="/todo"  style={{textDecoration:"none", color:"white", fontWeight:"bold", fontSize:"25px"}} > List </Link>
    <Link to="/total"  style={{textDecoration:"none", color:"white", fontWeight:"bold", fontSize:"25px"}} >Total - {total} | Pending : {uncomplete}
    </Link>
   
  </div>
  )
}

export default Navbar
