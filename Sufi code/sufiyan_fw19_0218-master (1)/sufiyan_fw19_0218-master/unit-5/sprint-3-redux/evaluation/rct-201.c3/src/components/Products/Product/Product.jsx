import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action_add_cartItem, action_get_cartItem, action_remove_cartItem, action_update_qty } from "../../../redux/cart/cart.actions";



const Product = ({productData})  => {

  const dispatch = useDispatch()

  const [check, setcheck] = useState(false)
  const [request , setrequest] = useState(false)
 
  
  useEffect(()=>{
    dispatch(action_get_cartItem())
  },[request])

  const { data } = useSelector((store)=> store.cart)

  useEffect(()=>{
    data.map((el)=>{ 
      if(el.id == productData.id){
         setcheck(true)
      }
    })
  },[])


// console.log(data)

   const AddToCart = (productData)=>{
        dispatch(action_add_cartItem(productData))
         setrequest(!request)
         setcheck(true)
   }

   const handleRemove = ()=>{
    dispatch(action_get_cartItem())
    dispatch(action_remove_cartItem(productData.id))
    setrequest(!request)
    setcheck(false)
    alert("Deleted Succssfully")
   }

   const ChangeQty = (value)=>{



     let payload = { id : productData.id, value: (productData.qty + value)  }
     setrequest(!request)
     dispatch(action_update_qty(payload))

   }


  return (
    <div style={{border:"1px solid", padding:"15px"}} data-cy={`product-${productData.id}`}>
      <h3 data-cy="product-name">{productData.name}</h3>
      <h6 data-cy="product-description">{productData.description}</h6>
      
      <div>
    
    {
      check ?  <div>
      <button data-cy="product-increment-cart-item-count-button" 
      onClick={()=>ChangeQty(1)} >+</button>
    <span data-cy="product-count">{productData.qty}</span>
    <button data-cy="product-decrement-cart-item-count-button"  
    onClick={()=>ChangeQty(-1)} >-</button>
    <button data-cy="product-remove-cart-item-button" 
    onClick={handleRemove} >Remove</button>
    </div> :   <button data-cy="product-add-item-to-cart-button" onClick={()=>AddToCart(productData)}  >ADD</button>
    }
     
    </div>
    </div>
  );
};

export default Product;



 // console.log(data.indexOf(productData) !== -1 )
 //
 // if (data.indexOf(productData) !== -1) {
 //   alert("Already added");
 //   //  console.log(cartData.indexOf(data));
 //   return;
 // }
 //  alert("Added To Cart");
 //

   