import { Link } from "react-router-dom";

export default function RestaurantCard({
name,
rating,
type,
price_starts_from,
id,  
}) {

   

 var bag = []

{
  type && turn()
  
function turn(){

let a = type

  a = a.split("_")

  for(let i=0; i<a.length; i++){  
   let x = capitalize(a[i])
    bag.push(x)
   
   }

}

function capitalize(s){
  s = s[0].toUpperCase() + s.slice(1)
  return s 
}
}

bag = bag.join(" ")
console.log(bag)




  return (
    <tr data-testid="item">
      <td>
        <Link to={`/restaurants/${id}`} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{bag}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
