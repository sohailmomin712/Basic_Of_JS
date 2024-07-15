import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const FetChData = ({page,limit,setTotalProduct})=>{
    return fetch(`http://localhost:3004/products?_page=${page}&_limit=${limit}`)
    .then((res)=> {
        setTotalProduct(Number(res.headers.get("X-Total-Count")))
       return  res.json()
    } )

  }
  

  const PageFromURL = (value)=>{

    value = Number(value);

    if(typeof value == "number" && value <= 0 ){
        value = 1
    }

    if(!value){
        value = 1
    }
    return value

  }

const Products = () => {

    const [ data, setData] = useState([])
  
   
    const [searchParams, setsearchParams] = useSearchParams()
    const limit = 2
    const [page,setPage] = useState( PageFromURL(searchParams.get("page")) || 1 )
    const [totalProduct, setTotalProduct] = useState(null)

    

    useEffect(()=>{
        handleFetch()
       
    },[page])



    useEffect(()=>{
      let myParam  = {page}
      setsearchParams(myParam)
    },[page])


    const handleFetch = ()=>{
        FetChData({page,limit,setTotalProduct})
        .then((res)=>{
            setData(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", width:"80%", margin:"auto"}} >

         {
            data?.map((el)=>(
                <Link to={`/products/${el.id}`}>
                <div style={{ border: "1px solid green" }} key={el.id}>
                  <img src={el.image} width="100px" alt="" />
                  <p>{el.title}</p>
                  <h6>{el.price}</h6>
                </div>
              </Link>
            ))
         }

        </div>

        <div>
            <button disabled={page==1} onClick={()=>setPage(page-1)} >PREV</button>
            <button>{page}</button>
            <button disabled={ page === Math.ceil(totalProduct/limit)} onClick={()=>setPage(page+1)} >NEXT</button>
        </div>
      
    </div>
  )
}

export default Products
