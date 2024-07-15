import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";



function ProductPage() {

  const [data,setData] = useState([])
  const [TotalPages,setTotalPages] = useState(0)

  const [page,setPage] = useState(1)
  const [perPage, setperPage] = useState(5);
  
  const [sortBy,setsortBy] = useState("asc")
  
  useEffect(()=>{
    handleFetchData()
  },[perPage,page,sortBy])
 
  const handlePage = (change)=>{

    setPage(page + change)

  }

  const handleSort = (data)=>{
    setsortBy(data)
  }


  console.log(perPage, sortBy)
 
  const handleFetchData = ()=>{
    getProducts({perPage,page,sortBy})
    .then((res)=>{
     const {data,totalPages} = res
     setData(data)
     setTotalPages(totalPages)
     console.log(data,totalPages)
    })
    .catch((err)=>{
      console.log(err)
    })
  
  }

  //const handleChange = (event) => {
  //  console.log(event.target.value);
  //  setperPage(event.target.value);
  //};


  // uplifting
  
  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button disabled={sortBy === "asc"} onClick={()=>handleSort("asc")}   data-testid="low-to-high">Sort low to high</button>
      <button disabled={sortBy === "desc"} onClick={()=>handleSort("desc")} data-testid="high-to-low">Sort high to low</button>
      <div>
        <label>Per page</label>

        <select value={perPage} onChange={(e)=>setperPage(e.target.value)} data-testid="limit-select">
          <option value="5" >5</option>
          <option value="10" >10</option>
          <option value="20" >20</option>
        </select>


      </div>
      <Pagination TotalPages={TotalPages} page={page} handlePage={handlePage}  />
      {/* map products */}

      {
        data.map((el)=> (
          <ProductList  data={el}  />
        ))
      }
      
    </div>
  );
}

export default ProductPage;
