import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// to fetch the data 
function getRest(id){
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
  .then((res)=> res.json())
}



function SingleRestaurantPage() {

  const [data, setData] = useState({});

  const params = useParams();

  useEffect(() => {
    
    getRest(params.id).then((res) => {
      try{
        setData(res.data);
      }catch(err){
        console.log(err)
      }
      
    });
  }, [params.id]);

  console.log(data);

  return (
    <div key={data.id} data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type: {data.type}</div>
      <div data-testid="restaurant-rating">Rating: {data.rating}</div>
      <div data-testid="restaurant-votes">Votes: {data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price: {data.price_starts_from}</div>
      <div>
        <img src={data.image} alt={data.name} data-testid="restaurant-image" width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
