import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";


const fetchData = (id)=>{

  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
  .then((res=>res.json()))

}



function RestaurantPage() {

  const {id} = useParams()
 //console.log(id)

 const [data, setData] = useState({})
 const [loading, setLoading] = useState(false)

 useEffect(()=>{
   HandleEmotions()
 },[])



 const HandleEmotions = async ()=>{

   try{
     
     setLoading(true)
     const res = await fetchData(id)
    // console.log(res)  
     setData(res.data)
    
    //console.log(data)
     setLoading(false)
   }catch(err){
     setLoading(false)
     console.log(err)
   }

 }

 var bag = []

{
  data.type && turn()
  
function turn(){

let a = data.type

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

 




  if (loading) {
    return <Loader />;
  }

  return (
    <div data-testid="restaurant-container">
      <img src={data.image} alt={data.name} data-testid="restaurant-image" width={"100%"} />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{bag}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
