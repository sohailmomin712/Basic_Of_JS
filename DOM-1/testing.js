//  //print the prime numbers to given limit
// let factors=0

// function checkPrime(num){
// for(let i=1; i<=num; i++){
//     if(num%i===0){
//       factors++
//     }
// }
// if(factors===2){
//     return true
// }
// else{
//     return false
// }
// for(let x=2; x<=20; x++){
//     let z=checkPrime(x);
// if(z===true){
//     console.log(x,"is prime")
// }else{
//     console.log(x,"is not prime")
// }
// }
// }

// (2)use addnumbers function to add 2 numbers

// function AddNumbers(a,b){
//     return a+b;
// }
// console.log(AddNumbers(2,4));


// (3) write a function to print the sum of 3 numbers

// let a=10;
// let b=20;
// let c=30;

// function sum_of_three(a,b,c){
//     return a+b+c
// }
// console.log(sum_of_three(10,20,30));



// (4) print odd numbers and print numbers to the given limit

// function isOdd(num){
//     if(num%2!==0){
//  return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isOdd(21));
// console.log(isOdd(20));



// let limit = 20 
// let arr = []

// for(let i=0; i<limit; i++){
//   if(isOdd(i) == true){
//     arr.push(i)
//   }
// }
// console.log(arr)

//(5) calculate the average of array if array have no element it should return zero

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;


// function avg_array(value){
//   for(let i of arr){
//       sum=sum+i;
//     // console.log(sum)
//   }
//   console.log(sum/arr.length)
// }
// avg_array(arr)


// let str="sudi";
// let name = 'sohail'


// function reverse(string){
//     let rev=""
    
//     for(let i=string.length-1;i>=0;i--){
//         rev=rev+string[i]
//     }
    
//     console.log(rev)
// }

// reverse(str);
// reverse(name);


// to check if char is small case or not

// function checkChar(char){
//     let small="abcdefghijklmnopqrstuvwxyz"
    
//     for(i of small){
//         if(i==char){
//             return console.log(true)
//         }
//     }
    
//  console.log(false)
// }

// checkChar("D");