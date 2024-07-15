import { useEffect } from "react"
import { useState } from "react"
import { addTodos, deletTodos, getTodos, toggleTodo } from "../api/todos"
import AddTodo from "./AddTodo"
import Pagination from "./Pagination"
import TodoList from "./TodoList"


function Todo(){

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)
    const [titleSortBy, settitleSortBy] = useState("ASC")
    const [page,setPage ] = useState(1)

    useEffect(()=>{

        handleGetTodos()

    },[titleSortBy, page])


    const handleGetTodos = ()=> {
        setLoading(true)
        getTodos({ 
            page,
            limit: 3,
            sort:"title",
             titleSortBy,      

        })
        .then((res)=>{
            setLoading(false)
            console.log(res)
            setTodos(res.data)
        })
        .catch(err=>{
            setLoading(false)
        })
    }




    const handleAdd = (text) =>{
   
        const item = {
            title : text,
            status : false,
        }
        setLoading(true)
        addTodos(item)
        .then((res)=>{
           console.log(res)
            handleGetTodos()
        })
        .catch( err=>{
            setLoading(false)
        })
    }


    const handleToggle = (id, newStatus) =>{

        setLoading(true)
        toggleTodo(id, newStatus)
        .then(res =>{
            handleGetTodos()
        })
        .catch(err=>{
            setLoading(false)
        })
        
    } 

    

    const handleDelet = (id) =>{

        setLoading(true)
        deletTodos(id)
        .then(res =>{
            handleGetTodos()
        })
        .catch(err=>{
            setLoading(false)
        })
        
    } 


    return (

        <div>
            <div>
                {loading && "Loading!"}
            </div>

             <AddTodo handleAdd={handleAdd} />
             <div>
                <button onClick={()=>settitleSortBy(prev=>prev==="ASC"? "DESC":"ASC")}>
                    TITLE : {titleSortBy === "ASC" ? "MAKE DESCENDING" : "MAKE ASCENDING" }
                </button>
             </div>
           
            {
                todos.map((el)=>(
                    
                    <TodoList    
                       key={el.id}
                       title={el.title}
                       status={el.status}
                       id={el.id} 
                       handleToggle={handleToggle} 
                       handleDelet={handleDelet}                   
                    />
                   
                ))
            }
            <div>
                <button onClick={()=>setPage(prev=>prev-1)} disabled={page===1} >PREV</button>
                <button>{page}</button>
                <button onClick={()=>setPage(prev=>prev+1)} >NEXT</button>
            </div>
            <Pagination total={10} current={page} onChange={(value)=>setPage(value)} />

        </div>

    )
}

export default Todo