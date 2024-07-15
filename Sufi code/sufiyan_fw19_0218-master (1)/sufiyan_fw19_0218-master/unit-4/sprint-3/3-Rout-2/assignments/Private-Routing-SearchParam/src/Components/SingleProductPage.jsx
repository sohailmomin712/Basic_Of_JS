import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const fetchData = ({id})=>{
    return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
}

const SingleProductPage = () => {
 
    const {id} = useParams()
  
    const [data, setdata] = useState({});
    const [loading, setloading] = useState(true);
    const [err, setErr] = useState(false);

    useEffect(()=>{
        handleFetch()
    },[])

    const handleFetch = async ()=>{

        try{
            setloading(true)
            const res = await fetchData({id})
            setdata(res)
            setloading(false)
        }catch(err){
          
            setErr(true);
        }

    }

    if (err) {
        return (
          <>
            <h1>NO PRODUCT FOUND</h1>
            <Link to="/products">GO TO PRODUCT</Link>
          </>
        );
      }

      if (loading) {
        return <Loading />;
      }
    

  return (

     <div style={{marginTop:"80px"}} >
       <img src={data.image} width="100px" alt="err" />
       <p>{data.title}</p>
       <h6>{data.price}</h6>
       <p>{data.description}</p>
     </div>
    
  )
}

export default SingleProductPage
