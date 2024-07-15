

1)what is the difference between Props and State?
Ans:- Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components


Explain the how map, filter, reduce work

<!-- map function -->
let arr=[1,2,3,4,5]
const res=arr.map((el)=>{
return arr*2
})
map function returns an array when we write a map function on an array

<!--filter  -->
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
filter functions filter an array and gives a value what we wrote in  condition
this is the work of filter function