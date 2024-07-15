

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//////////////////

function getUser(id) {
  return fetch(`https://reqres.in/api/users/${id}`)
  .then((res) => res.json());
}

///////// ************** ///////////////

function SingleUserPage() {

  const [data, setData] = useState([])

  // using params from Userpage
  const params = useParams()



  useEffect(() =>{
    getUser(params.id).then((res)=>{
      setData(res.data)
    
    })
  },[params.id])
  console.log(data)

  return (
    <div>
      <h1>USER ID : {params.id}</h1>

        {data && (
          
          <div>
              <img src={data.avatar} width="100px" alt={data.avatar} />
              <h3>Name: {`${data.first_name} ${data.last_name}`}</h3>
              <h3>Email: {data.email}</h3>
           </div>

        )}

    </div>
  )
}

export default SingleUserPage
