import React from "react";
import { useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import { useEffect } from "react"




function ProductPage() {


     const [data, setData] = useState([])
   // const [loading, setLoading] = useState(false)
    const [orderBy, settitleSortBy] = useState("ASC")
    const [page,setPage ] = useState(1)


  useEffect(()=>{

    handleGetTodos()
    
  },[page])



const handleGetTodos = ()=> {
  
  getProducts({
    orderBy,
    page,
   
})
  .then(res=>{
   
     // console.log(res)
      setData(res.data)
     
  })
  .catch(err=>{
     
  })
  }

console.log(page)





  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button  data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select"></select>
      </div>

      
      <Pagination total={10} current={page} onChange={(value)=>setPage(value)} />


      {/* map products */} 
      
       <ProductList 
         data={data}
         />
     
     
     
    </div>
  );
}

export default ProductPage;
