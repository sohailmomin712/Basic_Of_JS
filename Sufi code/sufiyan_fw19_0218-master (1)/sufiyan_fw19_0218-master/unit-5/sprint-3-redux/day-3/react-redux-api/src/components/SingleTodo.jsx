import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Link, useParams } from 'react-router-dom'
import { get_Todo_Action, get_total_action, UPDATE_TODO_ACTION } from '../redux/todo/todo.action'

  

const SingleTodo = () => {

    const {id} = useParams()

 const [data, setData] = useState({});
 const dispatch = useDispatch()

 const [ Fetch, setFetch ] = useState(false)
 const [err ,seterr] = useState(false)
 // console.log(todos)



 useEffect(()=>{
   dispatch( get_total_action() )
     dispatch(get_Todo_Action())
    
 },[Fetch,id])
      
  useEffect(() => {
      axios.get(`http://localhost:8060/todo/${id}`)
      .then((res) =>{
        setData(res.data)
        seterr(false)
      }
      ).catch((err)=>{
        seterr(true)
        console.log(err.message)
      })
  }, [id,Fetch])



 //console.log(data)

 if(err){
  return (
    <div style={{margin:"auto", justifyContent:"center", textAlign:"center"}}>

<h1 style={{color:"brown" , fontWeight:"bolder"}} >Todo not Found</h1>
    </div>
  )
 } 

  return (
    <div style={{margin:"auto", justifyContent:"center", textAlign:"center"}}>

<h1 style={{color:"brown" , fontWeight:"bolder"}} >SINGLE TODO PAGE</h1>


<div  style={{ textAlign:"center" , margin:"auto", padding: "20px",  display: "flex", gap: "50px", backgroundColor:"hsl(33, 53%, 54%)", color:"yellow", fontSize:"25px", fontWeight:"bolder" }} >
                    
                   <div style={{display:"flex", gap:"50px", gridTemplateColumns:"80% 20% 20%"}}   > 
                    {data.title}
          <button onClick={()=>{
            dispatch(UPDATE_TODO_ACTION({id:data.id, status:!data.status}))
            setFetch(!Fetch)
          }}  >Change Status</button> 
          Status : {data.status === true ? "Done" : "Pending" }
            </div>
    </div>

  <br /><br /><br />

 <Link to="/todo">
    <button >GO BACK</button>
 </Link>


    </div>
  )
}

export default SingleTodo
