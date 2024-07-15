
import React from 'react'
import { useContext } from 'react'
import { BsHurricane } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Contexts/AppContextProvider'

import style from "./ProductCart.module.css"


const ProductCard = (
    { id,
      title,
      handleAddToCartProduct,
      price,
      description,
      category,
      image }) =>{


        const {isAuth} = useContext(AppContext)
        const navigate = useNavigate()

        // to navigate to More Product Details
        const VisitSingleProduct = () =>{

          navigate(`/products/${id}`)
         
        }




  return (

    <div className={style.main}>

    <div >
      <img  onClick={VisitSingleProduct} src={image} alt={title} />
    </div>

    <div>
      <h2>{title}</h2>
      <b>{`₹  ${price}`}</b>
      <p>Category : {category}</p>
      <button className={style.cartBtn} >
        Add To cart
      </button>
      <button className={style.buyBtn} >
        Buy Now
      </button>
    </div>
    
  </div>
    
  )



}

export default ProductCard