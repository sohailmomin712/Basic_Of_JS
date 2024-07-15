import Quantity from "./product"

function TotalAmount({cart}){

    let total = 0;

    cart.map((el)=>{

        total += el.prize
    })
    


    return (

        
        <div style={{display :"flex", 
        justifyContent:"center", 
        alignItems:"center", 
        gap:"50px",
        
        }}>
        <h1 style={{ color:"white", 
            backgroundColor: "blue",
             border:"none",
              padding: "15px 20px",
               borderRadius: "5px",
                fontSize: "40px",
         }} >{`Total - ${total}`}</h1>

         
        <button style={{
            color:"white", 
            backgroundColor: "red",
             border:"none",
              padding: "15px 20px",
               borderRadius: "5px",
                fontSize: "20px",
                fontWeight: "bold",
            cursor:"pointer" }}>CHECKOUT</button>

       </div>



    )
}

export default TotalAmount 