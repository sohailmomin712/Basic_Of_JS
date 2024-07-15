import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import axios from "axios"
import { Link, useSearchParams } from 'react-router-dom'
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";

//https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=5

///////////////////////////////////////////

// to fetch the data 
function getRest({page = 1}){
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
  .then((res)=> res.json())
}

///////////////////////////////////////////

function getCurrentPage(value){
  value= Number(value)
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  console.log(value)
  return value;
}



function Dashboard() {

 const {token, logoutUser} = useContext(AppContext)

 const [data, setData] = useState([])

  /// set params we can acces this in other pages
  let [searchParams, setSearchParams] = useSearchParams()
 //  console.log(searchParams)

  const initialPage = getCurrentPage(searchParams.get("page"))

  const [page, setPage] = useState(initialPage);

  const [totalPages, settotalPages] = useState(0)
 
 useEffect(()=>{

  // fetch data 
  getRest({page}).then((res)=>{
    try{
      console.log("data fetching and running in UserPage")
      setData(res.data)
      console.log(res.data)
      settotalPages(res.totalPages)
      console.log(res)
    }catch(err){
      console.log(err)
    }
  
  })

},[page])



useEffect(()=>{

  setSearchParams({page})

},[page,setSearchParams])




  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button>
        <p>
          Token: 
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}

        <RestaurantTable data={data} />

      </div>
      <div data-testid="pagination-container">

     <Pagination
          handlePageChange={(page) => setPage(page)}
          totalPages={totalPages}
          currentPage={page}
        />
      </div>
    </div>
  );
}

export default Dashboard;
