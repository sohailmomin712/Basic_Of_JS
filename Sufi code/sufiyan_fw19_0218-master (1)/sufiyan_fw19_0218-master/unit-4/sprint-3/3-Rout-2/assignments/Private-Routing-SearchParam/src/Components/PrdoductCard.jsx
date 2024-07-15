import React from 'react'
import { Link } from "react-router-dom"

const PrdoductCard = ({el}) => {


  return (

    <Link to={`/products/${el.id}`}>
    <div key={el.id}>
      <img src={el.image} width="100px" alt="" />
      <p>{el.title}</p>
      <h6>{el.price}</h6>
    </div>
  </Link>
  )
}

export default PrdoductCard
