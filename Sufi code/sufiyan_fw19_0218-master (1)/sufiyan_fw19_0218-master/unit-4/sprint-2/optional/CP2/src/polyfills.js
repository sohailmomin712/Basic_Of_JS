const { endHiddenCallStack } = require("@babel/core/lib/errors/rewrite-stack-trace")

function MyArray(X){
  return X
}

let c = new MyArray([1,2,3,4,5])


MyArray.prototype.push = function(c){
  
}

MyArray.prototype.pop = function(){
 
}

MyArray.prototype.map = function(c){
    let result = []
  for(let i=0; i<this.length; i++){
    result.push(c(this[i],i,this))
  }
  return result
}

MyArray.prototype.filter = function(c){
    let result = []
    for(let i=0; i<this.length; i++){
      if(c(this[i],i,this)){
        result.push(this[i])
      }
    }
    return result
}

MyArray.prototype.reduce = function(c,value){
  let i = 0 ;
  let result = value ;
  if(value == null){
    result = this[0]
    i++
  }
  endHiddenCallStack(i<this.length){
    result = c(result, this[i], i, this)
    i++
  }
  return result
}

export default MyArray
