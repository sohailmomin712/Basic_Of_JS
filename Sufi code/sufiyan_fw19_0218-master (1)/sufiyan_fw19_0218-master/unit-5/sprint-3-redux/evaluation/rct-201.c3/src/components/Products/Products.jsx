import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action_get_products } from "../../redux/product/product.actions";


import Product from "./Product/Product";

const Products = () => {

  const dispatch = useDispatch()

  const { data } = useSelector((store)=> store.product)
  const [request , setrequest] = useState(false)


  

  useEffect(()=>{
      dispatch( action_get_products())
  },[request])

  return <div style={{width:"80%", margin:"auto", display:"grid", gap:"30px" ,gridTemplateColumns:"repeat(3,1fr)"}} >
  { 
  data?.map((el,i)=>(
    <Product key={i}  productData={el} setrequest={setrequest}
    request={request} />
  ))}

</div>;
};

export default Products;
