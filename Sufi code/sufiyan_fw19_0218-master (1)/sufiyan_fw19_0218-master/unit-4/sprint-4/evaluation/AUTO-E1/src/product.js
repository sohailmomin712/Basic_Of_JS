

function Product(name, brand, price, description) {
  this.name= name,
  this.brand= brand,
  this.price= price,
  this.description= description,
  this.sold= false
  
}

let Puma = new Product("Shoe", "Puma", 5000, "Sport shoe");


Product.prototype.changePrice = function (newPrice){
   this.price = newPrice
}

Product.prototype.toggleStatus = function (){
  this.sold = !this.sold 
}

Puma.changePrice(7000)
Puma.toggleStatus()

console.log(Puma)


// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
