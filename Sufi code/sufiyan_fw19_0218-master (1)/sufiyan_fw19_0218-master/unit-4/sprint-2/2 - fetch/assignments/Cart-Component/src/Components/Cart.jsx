
import React from "react"
import TotalAmount from "./total"
import Quantity from "./product"



    
let total = 0;
let item_Price = 0; 


function Cart(){


    const [cart , setCart] = React.useState([])


    let Produts =[
        {
            id: 1,
            title: "Noodles",
            prize: 30,
            product_qty: 1,
            img_url: "https://thumbs.dreamstime.com/b/bowl-chinese-noodles-vegetables-white-background-30440348.jpg"
    
        },
        {
            id: 2,
            title: "Biryani",
            prize: 90,
            product_qty: 1,
            img_url: "https://bali.queenstandoor.com/blog/wp-content/uploads/2019/11/vegetable-biryani.png"
    
        },
        {
            id: 3,
            title: "Chips",
            prize: 10,
            product_qty: 1,
            img_url: "https://www.bigbasket.com/media/uploads/p/xxl/40202278-2_5-lays-potato-chips-indian-magic-masala-best-quality-crunchy.jpg"
    
        },
    ]
    
    console.log(cart)
    const productAdd = (item)=>{

      console.log(item)
        setCart([...cart, item])
   
    
    }

    const productRemove = (id)=>{

        setCart(cart.filter((el) => el.id !== id));
      
      }

    return(

        <div className="mainDiv" >


            <div className="ProductsDiv" >

            {Produts.map((el)=>(
                
                <div className="product_div" >
                <img src={el.img_url} />
                <h3>{el.title}</h3>

                <h3>{`₹ ${el.prize} `}</h3>             

                <Quantity productRemove={productRemove}  productAdd={productAdd} item={el}  />

                
             
             </div>
                   
                 
            ) )}
            </div>

            <TotalAmount  cart={cart} />

        </div>

    )
}






export default Cart