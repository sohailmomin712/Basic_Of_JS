

function Product(name, brand, price, description) {
  this.name= name,
  this.brand= brand,
  this.price= price,
  this.description= description,
  this.sold= false
}

let Puma = new Product("Shoe", "Puma", 5000, "Sport shoe");

// console.log(Puma)

//Product.prototype.changePrice = function (newPrice){
//
//  return({...this,price:newPrice})
//}

Product.prototype.changePrice = function (newPrice){

  Puma = {...this,price:newPrice}
}


Puma.changePrice(7000)

console.log(Puma)




// Array.prototype.myPop = () => {
// 
//   let index = this.length - 1;
//   if (index == -1) {
//     console.log("underflow");
//   } else {
//     return this[index];
//   }
// };
// console.log(arr1);
// 
// let popTest = arr1.myPop();


// console.log(popTest);






// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
