import React from "react";


// add styling on your own just giving you the template
const RestaurantCard = ({  categories , cost_for_one , cost_for_two , 
  id, image , is_favorite , min , payment , rating , 
  restaurantName , reviews , votes }) => {

    // it will convert all Keys into Array Form
   let ALL = Object.keys(payment)

   let payment_Available =[]

  for(let i in payment){
    if(payment[i] == true){
      payment_Available.push(i)
    }
  }

 // console.log(payment_Available)

  return (
    <div style={{
     
      margin: "auto",
      marginTop: "15px",
      marginBottom: "15px",
      border: "1px solid rgb(220,220,220)",
      height: "100%",
      display: "grid",
      borderRadius:"20px",
      backgroundColor:"white"
      
   
    }} data-testid="card-item">

      <div  style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr 1fr",
          gridTemplateRows: "auto"
        }} >
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} >{/* add image */}
         <img style={{borderRadius:"10px"}} src={image} width="180" height="180" alt="restaurant-name" />
        </div>
        
        <div style={{
            padding: "0px 25px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "start"
          
          }} >
            
          <h3 style={{ color: "brown", fontWeight: "900", fontSize: "32px" }} data-testid="card-title">{restaurantName}</h3>
          {/* add all other rest details */}
          <p  style={{  marginTop:"-20px" , fontSize: "20px", fontWeight: "600", color: "grey" }} >{categories.join(" , ")}</p>
          <p  style={{  marginTop:"-10px" , fontSize: "20px", fontWeight: "600", color: "grey" }} >{`Cost ₹${cost_for_one} For One`}</p>
          <p  style={{  marginTop:"-10px" , fontSize: "20px", fontWeight: "600",  }} >{`Min ₹${min} ○ Up to 30 min`}</p>
          <p  style={{  marginTop:"-10px" , fontSize: "20px", fontWeight: "600",  }} >Accept Online Payment Only</p>
        </div>
        <div
         style={{
          padding: "0px 25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
           
          }}>
          <div
           style={{
            width: "55%",
            backgroundColor: "green",
            padding: "10px",
            color: "white",
            fontWeight: 600,
            textAlign: "center",
            borderRadius: "5px"
          }} data-testid="card-rating">{rating}</div>
          {/* votes etc.. */}
          <div
           style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "grey",
            marginTop: "5px"
          }}>
            {votes} : VOTES
         
          </div>
          <div
           style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "grey",
            marginTop: "5px"
          }}>
            {reviews} : REVIEWS
         
          </div>
        </div>
      </div>

      
     <div 
     style={{
      display:"grid",
      gridTemplateColumns: "3fr 5fr 2fr",
      gridTemplateRows: "auto",
      borderTop: "1px solid #eeee"
     }}>

     <div  style={{
            padding: "0px 25px",
            backgroundColor: "#eeee",
         
          
           
          }}>

         <p style={{fontSize:"20px"}}>PAYMENT AVAILABLE</p>
        <h2 style={{marginTop:"-20px"}} >{payment_Available.join(" / ")}</h2>
      </div>
     <div></div>
     <div  style={{
            padding: "5px",
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
      <div>ORDER ONLINE  </div>
     </div>

     </div>
    </div>
  );
};
export { RestaurantCard };
