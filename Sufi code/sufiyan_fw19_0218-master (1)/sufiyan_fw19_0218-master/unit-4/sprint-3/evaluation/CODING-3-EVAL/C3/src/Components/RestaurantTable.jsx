import RestaurantCard from "./RestaurantCard"



function RestaurantTable({data}){

console.log(data)

    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (
                            <RestaurantCard
                            id={item.id}
                            name={item.name}
                            number_of_votes={item.number_of_votes}
                            price_starts_from={item.price_starts_from}
                            rating={item.rating}
                            type={item.type}
                            />
                    )
                    )}
                </tbody>
            </table>
    )
}

export default RestaurantTable