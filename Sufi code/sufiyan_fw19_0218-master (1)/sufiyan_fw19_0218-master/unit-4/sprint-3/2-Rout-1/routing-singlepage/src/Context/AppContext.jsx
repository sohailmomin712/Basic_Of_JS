

//step 1


import {  createContext, useEffect, useState } from "react";


export const AppContext = createContext()

// step 2

const FetChData = ()=>{
  return fetch("https://fakestoreapi.com/products")
  .then(res=>res.json())

}


export const AppContextProvider=({children})=>{

  const [data,setData]=useState([])
  const [loading,setloading]=useState(false)

  useEffect(()=>{
   
    handleFetch()

  },[])
 
const handleFetch=()=>{
  setloading(true)
  FetChData()
  .then(res=>{
    // console.log(res)
    setData(res)
  })
   setloading(false)

}


  return( <AppContext.Provider value={{loading
   , setloading , data,setData}} >
    {children}
   
  </AppContext.Provider>
  )
}

