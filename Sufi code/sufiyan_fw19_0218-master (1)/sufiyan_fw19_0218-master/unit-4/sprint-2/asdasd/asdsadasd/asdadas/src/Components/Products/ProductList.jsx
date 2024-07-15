import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component

const ProductList = ({data}) => {

 
 
  console.log(data)

  return (

    
  <div data-testid="products-container">
    
    {data.map((el) => (
    <ProductItem

     image={el.image}
     
     title= {el.title}
     price= {el.price}
    category= {el.category}


      />
    ))}
   </div>
  )

  
  
};

// export
export default ProductList;
