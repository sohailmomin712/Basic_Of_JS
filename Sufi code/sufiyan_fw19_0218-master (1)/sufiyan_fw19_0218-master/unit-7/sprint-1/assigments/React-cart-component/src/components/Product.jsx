// import module.css here;
const Product = ({name,price,quantity,id,handleQty}) => {
 // console.log(name,price,quantity,id,handleQty)
  return (
    <>
      <div key={id} style={{display:"flex" , gap:"20px"}}  data-testid="product-container">
        <h2 data-testid="product-name"> {name} </h2>
        <h2 data-testid="product-price"> {price} </h2>
        <button onClick={()=>handleQty({id: id, value:1})} data-testid="quantity-increment">+</button>
        <h2 data-testid="product-quantity"> {quantity} </h2>
        <button onClick={()=>handleQty({id: id, value:-1})} data-testid="quantity-decrement">-</button>
      </div>
    </>
  );
};
export default Product;
