

import styles from "./Navbar.module.css"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

///////////////////////////////////////////

// to fetch the data 
function getUser({page = 1}){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res)=> res.json())
}

///////////////////////////////////////////

function getCurrentPage(value){

    value= Number(value)
    if (typeof value === "number" && value <= 0) {
      value = 1;
    }
    if (!value) {
      value = 1;
    }
    console.log(value)
    return value;
}

////////// *********** ///////////

function UsersPage() {

    // for auth
  
    const {isAuth, toggleAuth} = useContext(AuthContext)

 /////////////////////////////////////////////////

    // to get the fetched data 
    const [data, setData] = useState([])
   const [total, settotal] = useState(null)
   
/// set params we can acces this in other pages
    let [searchParams, setSearchParams] = useSearchParams()
  //  console.log(searchParams)

    const initialPage = getCurrentPage(searchParams.get("page"))

    const [page, setPage] = useState(initialPage);

  // // console.log(page)

    const [text, setText] = useState(searchParams.get("q") || "");
  // console.log(text)
//////////////////////////////////////////////////////////

    useEffect(()=>{

        // fetch data 
        getUser({page}).then((res)=>{
          console.log("data fetching and running in UserPage")
         
          const {total_pages, data} = res
          setData(data)
          settotal(total_pages)
        //  console.log(res)
        })

    },[page])
 
    /////////


    useEffect(()=>{

      setSearchParams({page, q: text})

    },[page,text,setSearchParams])



//////////////////////////////////////////////////////////


    if(!isAuth){

      return (
        
      
        <>
        <h1>USER PAGE</h1>
        <p>USer Should Log in First</p>
        <div>
            <button className={styles.buttonS}  onClick={toggleAuth} >
                LOGIN
            </button>
        </div>
        </>

    )


    }


  return (
    <div style={{width: "300px", margin: 'auto'}} >
        
      <h1>Users</h1>

      <input
        placeholder="type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button>{page}</button>

        <button disabled={page === total} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>


      <div >      

            {data.map((el)=> (
                
                <div  key={el.id} >
                       <Link className={styles.userName} to={`/users/${el.id}`}> {el.first_name} </Link>
                  </div>
       
             ) )}
            
       </div>
    </div>
  )
}

export default UsersPage
