

/// // importing in NODE

const { sum,  sub,  mul,  div, } = require("./math")

var arguments = process.argv

if(arguments[2]==="random"){

 const crypto = require("crypto")   

 //// Synchronous
 //const RandomNum = crypto.randomInt(0,1000)
 //console.log(RandomNum)

// Asynchronous
 crypto.randomInt(0,1000,(err,n)=>{

  if(err) throw err ;
  console.log( `Random Number is ${n}`)
    
 })

 


}else{

    
 let a = arguments[2]
 let b = arguments[3]

console.log(` sum is ${sum( parseInt(a), parseInt(b))}`)
console.log(` sub is ${sub( parseInt(a), parseInt(b))}`)
console.log(` mul is ${mul( parseInt(a), parseInt(b))}`)
console.log(` div is ${div( parseInt(a), parseInt(b))}`)

    
}





