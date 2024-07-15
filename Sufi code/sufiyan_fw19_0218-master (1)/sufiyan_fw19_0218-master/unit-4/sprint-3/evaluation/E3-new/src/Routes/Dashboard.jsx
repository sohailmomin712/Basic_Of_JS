import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";


const fetchData = ({limit,page,filter})=>{

  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${limit}&filter=${filter}`)
  .then((res=>res.json()))

}



function Dashboard() {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const [total, setTotel] = useState(0)

  const [limit, setLimit] = useState(10)
  

  const [filter, setFilter] = useState("")
  const [page,setPage] = useState(1)


   
  const {authState,logoutUser} = useContext(AppContext)
  const {token} = authState

  useEffect(()=>{
    HandleEmotions()
  },[limit,page,filter])


  const HandleEmotions = async ()=>{

    try{
      
      setLoading(true)
      const res = await fetchData({limit,page,filter})
     // console.log(res)
      const {data,totalPages } = res
      
      setData(data)
      setTotel(totalPages)
     console.log(data)
      setLoading(false)
    }catch(err){
      setLoading(false)
      console.log(err)
    }

  }

  return (
    <div >
      <h3>Dashboard</h3>
      <div>
        <button onClick={()=>logoutUser()} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">Qw12la31afa13e1ds</b>
        </p>
      </div>
      <br />
      <div>
        <select value={filter} onChange={(e)=>setFilter(e.target.value)} data-testid="filter-box">
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading && <Loader />}
        
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
        
         <RestaurantTable data={data} />

      </div>
      <br />
      <div data-testid="pagination-container">
      <Pagination
      totalPages={total}
      currentPage={page}
      handlePageChange={(page)=>setPage(page)}

      />
        {/* Pagination */}
        </div>
    </div>
  );
}

export default Dashboard;
