

let arr2 = new Array(1,2,3)
console.log(arr2)


// 1 ) create custom method

Array.prototype.namaskar = function (){
    console.log("namaskar s")
}




// 2 ) create on push function method

Array.prototype.mypUsh = function (value){
   

    let index = this.length; 
    this[index] = value;

};

arr2.mypUsh(10);
console.log(arr2)

arr2.mypUsh(1020);
console.log(arr2)

arr2.namaskar()





///// 3 ) creating own map function 


Array.prototype.myMap = function (func){

    // access the array using - this 
    //run a loop on array - for loop - [ 1, 2 , 3 ]

    //each eelement func ()

    let newarr = []

     for ( var i = 0; i<this.length; i++){

        let element = this[i]
        
        let x = func(element);
       newarr.mypUsh(x)  /// mypush function we created copy of push
    }

    return newarr
}


/// working own inbuilt map func
let x = arr2.myMap(function(x){
    return x * 2
})

console.log(x)





