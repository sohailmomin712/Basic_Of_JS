// importing in NODE

const { sum,  sub,  mul,  div, } = require("./math")

// browser >> window
// nodejs >> process
const path = require("path")

console.log(sum(5,5))
console.log(sub(5,5))
console.log(mul(5,5))
console.log(div(5,5))

console.log(process.cwd())
console.log(path.join(process.cwd(),"..","assets"))