

import React, { useContext, useEffect } from 'react'

import { useState } from 'react'
import ProductCard from './ProductCard';
import style from "./ProductCart.module.css"
import { AppContext } from '../Contexts/AppContextProvider';

function Products() {

  // to collect data
  // const [data, setData] = useState([])

  // 
  const [isLoading, setIsLoading] = useState(true);

  // if data does not exist 
  const [isError, setIsError] = useState(false);

  
   // consumer  from context Provider     
   const {handlePRODUCTDATA, productsData} = useContext(AppContext)

    




  
  const handleAddToCartProduct = () => {
  
  };




  //If loading true
  if(isLoading){
    return (
        <div>
            <div><h1>.... Loading</h1></div>
            <div>
                <img width="500px" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" srcset="" />
            </div>
        </div>
    )
  }


  //default
  return (
    
    <div className={style.parent}>


        {productsData?.map((el) => (
           
           <ProductCard 
           key={el.id}
           {...el}
           handleAddToCartProduct = {handleAddToCartProduct}


           
           />

        ))}

       

    </div>
  )




}

export default Products
