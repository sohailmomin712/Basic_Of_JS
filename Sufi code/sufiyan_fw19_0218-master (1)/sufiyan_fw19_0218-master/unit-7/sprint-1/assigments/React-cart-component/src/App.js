import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import data from "./db.json";
function App() {

  const [DataD, SetData] = useState(data)
  const [quantity, setQuantity] = useState(1)
 
  

   const [ total, setTotal] = useState(0)
   

  const handleQty = (value)=>{
    setQuantity(quantity + value.value)
  }
  

  useEffect(()=>{
    let X = 0
    data.map((el)=>  {
      console.log(total)
      X = X + el.price*quantity
    })

    setTotal(X)
  },[quantity])

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {
          DataD.map((el,i)=> (
            <Product key={i} {...el} handleQty={handleQty} quantity={quantity} />
          ))
        }
        {/*  map through the  data and pass props to the Product component */}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
      {total}
     {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
      </h1>
    </div>
  );
}

export default App;
