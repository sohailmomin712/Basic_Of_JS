import { Link } from "react-router-dom";
export function RestaurantCard({
    name, rating, price, id, votes, type
}) {
    console.log()
    return (
        <tr data-testid="item">


            <td >
                <p>
                    <Link data-testid="name" to={`/restaurants/${id}`}>
                        {name}
                    </Link>
                </p>
            </td>


            <td data-testid="rating">
                {rating}
            </td>
            <td data-testid="type">
                {type}
            </td>
            <td data-testid="votes">
                {votes}
            </td>
            <td data-testid="price">
                {price}
            </td>
        </tr>
    )
}
