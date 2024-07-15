
import React from "react" 
import TotalAmount from "./total"


let total = 0;
let item_Price = 0; 

function Quantity({item, productAdd, productRemove}){

    const [qty, setQty] = React.useState(0)
 
    const handleIncreament = (e,item)=>{
        setQty(qty + e)
       productAdd(item)
      
    }

    const handleDecreament = (e,id)=>{
        setQty(qty + e)
        productRemove(id)       
    }

   // console.log(item.prize)
    item_Price = qty *  item.prize
  // console.log(item_Price)
  
  //  console.log(total)

    return(

        <div style={{display : "flex",
         justifyContent: "center", gap:"5px", alignItems:"center"
         }} >

        <button style={{color:"white", backgroundColor:"red", fontSize:"25px",  border:"none", padding:"0px 8px", margin:"0px 10px" }} disabled={qty===0} 
        onClick={ ()=> handleDecreament(-1,item.id) } > - </button>
             <h5 style={{fontSize:"20px",}}>{`Qty. ${qty}`}</h5>
        <button style={{color:"white", backgroundColor:"green", fontSize:"25px",  border:"none", padding:"0px 8px", margin:"0px 10px" }}  onClick={ ()=> handleIncreament(+1,item) } > + </button>

        <h3 style={{marginRight:"20px"}} >{`Rs. ${item_Price}`}</h3>

        </div>
      
    )

}



export default Quantity