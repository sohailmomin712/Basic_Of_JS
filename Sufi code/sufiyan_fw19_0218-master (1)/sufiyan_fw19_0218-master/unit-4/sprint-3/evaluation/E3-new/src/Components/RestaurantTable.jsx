import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data}) {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((el)=>(
           <RestaurantCard
           key={el.id}
           name={el.name}
           rating={el.rating}
           type={el.type}
           price_starts_from={el.price_starts_from}
           id={el.id}
           />
          ))
        }
      </tbody>
    </table>
  );
}

export default RestaurantTable;
