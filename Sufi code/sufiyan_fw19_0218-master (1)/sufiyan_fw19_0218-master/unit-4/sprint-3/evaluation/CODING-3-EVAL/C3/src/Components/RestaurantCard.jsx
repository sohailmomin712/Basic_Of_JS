import { Link, useNavigate, useSearchParams } from 'react-router-dom'


 function RestaurantCard({
    id,
name,
number_of_votes,
price_starts_from,
rating,
type,
}){

    const navigate = useNavigate()

    //console.log(name)
    return (
        <tr  data-testid="item">
          
          <td data-testid="name" onClick={()=>navigate(`/restaurants/${id}`)} >
          
                
                  {name}
               
         
                </td>
            <td data-testid="rating">
                {rating}
            </td>
            <td data-testid="type">
             {type}
            </td>
            <td data-testid="votes">
                {number_of_votes}
            </td>
            <td data-testid="price">
                  {price_starts_from}
            </td>
        </tr>
    )
}

export default RestaurantCard