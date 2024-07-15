// import data from given data.json

import { useEffect } from "react";
import { useState } from "react";
import data from "../data.json"
import { RestaurantCard } from "./RestaurantCard";

// const initState = {};
const RestaurantDetails = () => {

 
   const [AllData , setAllData] = useState(data)
   
   const [FilterByRate, setFilterByRate]= useState(0)
   //console.log(FilterByRate)
   const [SortByCost, setSortByCost]= useState(null)

   const [FilterByPayment, setFilterByPayment] = useState("all")

   const FilterAllCoditions = ({rating,payment},index)=>{
        

    const { card, upi, cash} = payment

    // filter default
    let AllPaymentCondition = true;
 
    if(FilterByPayment == "cash"){

      AllPaymentCondition = cash ? true : false

    }else if(FilterByPayment == "upi"){

      AllPaymentCondition = upi ? true : false
    }
    else if(FilterByPayment == "card"){
      AllPaymentCondition = card ? true : false
    }



     return rating >= FilterByRate && AllPaymentCondition


   }
   

   const SortAllCoditions = (a,b)=>{
    
    if(SortByCost === null ){
      return null
    }

    
    if(SortByCost === "asc" ){
      return (
        a.cost_for_two - b.cost_for_two &&
        a.rating - b.rating
        )
    }

    
    if(SortByCost === "desc" ){
      return  (
        b.cost_for_two - a.cost_for_two &&
        b.rating - a.rating
        )
    }

   }



  return (
    <div >
       <div style={{backgroundColor:"white",margin:"auto", textAlign:"center"}}>
      <h1>RestaurantDetails</h1>
      {/* rating buttons */}
    
    
      {[4, 3, 2, 1, 0].map((rating) => {
        return (
          <button onClick={()=>setFilterByRate(rating)}  data-testid={`rating-${rating}`}>
            {rating == 0 ? "All" : `${rating} and above`}
           
          </button>
        );
      })}
      
     

      <br />
      {/* payment methods */}
      {["card", "cash", "upi", "all"].map((item) => {
        return <button  onClick={()=>setFilterByPayment(item)}  data-testid={`filter-${item}`}>{item}</button>;
      })}
        <br />
      {["asc", "desc"].map((order) => {
        return <button onClick={()=>setSortByCost(order)} data-testid={`sortBy-${order}`}>{order}</button>;
      })}

       </div>
      <div style={{display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: "1fr 1fr",
        gap:"50px",
        width:"80%",
        margin:"auto"
        }} >
  
      { AllData &&
   
   AllData
   ?.filter(FilterAllCoditions)
   .sort(SortAllCoditions)
   .map((el)=>(
     <RestaurantCard
     categories={el.categories}
     cost_for_one={el.cost_for_one} 
     cost_for_two={el.cost_for_two} 
     id={el.id}image={el.image} is_favorite={el.is_favorite}
     min={el.min} payment={el.payment}
     rating={el.rating} 
     restaurantName={el.restaurantName} reviews={el.reviews} 
     votes={el.votes}         
     
     />
     ))
    }

    </div>
 </div>
  );
};
export { RestaurantDetails };

