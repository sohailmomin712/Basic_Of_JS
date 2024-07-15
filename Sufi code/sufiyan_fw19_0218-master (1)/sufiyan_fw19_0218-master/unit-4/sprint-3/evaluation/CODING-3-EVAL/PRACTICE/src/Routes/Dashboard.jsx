import { useContext, useEffect, useRef, useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";
const getData = () => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10`).then((res) => {
    return res.json()
  }).then((res) => res).catch((err) => {
    console.log(err.message);
  })
};
const getPageData = (page) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`).then((res) => {
    return res.json()
  }).then((res) => res).catch((err) => {
    console.log(err.message);
  })
};

function Dashboard() {
  const { token, logoutUser, isAuth } = useContext(AppContext);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const tPage = useRef(0);



  useEffect(() => {
    getData().then((res) => {
      setData(res);
      // console.log(res);
      tPage.current = res.totalPages;
      // console.log(data.data);
    })
  }, []);


  const handlePageChange = (newPage) => {
    setPage(newPage)
    // console.log(newPage)/
    getPageData(newPage).then((res) => {
      setData(res);
    })
    // console.log(page);
  };



  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data.data} />
      </div>
      <div data-testid="pagination-container"><Pagination currentPage={page} totalPage={tPage.current} handlePageChange={handlePageChange} /></div>
    </div>
  );
}

export default Dashboard;
