import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from './Loading'
import PrdoductCard from './PrdoductCard'
import {useSearchParams} from 'react-router-dom'

const FetChData = ()=>{
    return fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
}
  

const ProductPage = () => {

    const [data,setData]=useState([])
    const [loading,setloading]=useState(false)


    /// set params we can acces this in other pages

    let [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams)

  
    const [text, setText ] = useState(searchParams.get("q") || "")



    useEffect(()=>{
   
        handleFetch()
    
      },[])


      useEffect(()=>{
         setSearchParams({q: text})
      },[text])

     
    const handleFetch=()=>{
      setloading(true)
      FetChData()
      .then(res=>{
         console.log(res)
        setData(res)
      })
       setloading(false)
    
    }

    const handleSearchData = ()=>{

        const newArr = data.filter((el)=>{
            
            let a = el.title.split(" ").join("").toLowerCase()
            let b = text.split(" ").join("").toLowerCase()

            if(a === b){
                return el
            }


          //  console.log(el.title.split(" ").join("").toLowerCase())
          //  console.log(text.split(" ").join("").toLowerCase())
               
            
         
        })

       console.log(newArr)
       setData([...newArr])
    }
  
    
  if (loading) {
    return <Loading />;
  }


  return (

    <div style={{ marginTop:"50px" }}>
    <h1>SEARCHING WORKING TRY WITH TITLE</h1>
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Search Product' />
        <button onClick={handleSearchData} >SEARCH</button>

     <div style={{ marginTop:"50px",display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>

      {data.map((el) => (
          <PrdoductCard el={el} key={el.id} />
          ))}
    </div>


    </div>
  )
}

export default ProductPage
