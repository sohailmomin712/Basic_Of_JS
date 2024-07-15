import { useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";

function RestaurantTable({ data }) {


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
                {
                    data == undefined ? null : data.map((item) => {
                        return <RestaurantCard id={item.id} name={item.name} type={item.type} price={item.price_starts_from} key={item.id} votes={item.number_of_votes} rating={item.rating} />
                    })
                }

            </tbody>
        </table>
    )
}

export default RestaurantTable