

// Object.create()




let nikeProduct = {

    brand: "nike",
    seller: "flipkart",

}


let p1 = Object.create(nikeProduct);

let p2 = Object.create(nikeProduct);


p2.name = "sufi"
console.log(p2)

console.log(p1)
