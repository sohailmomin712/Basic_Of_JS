import React from "react";
import {useEffect, useState} from "react"
import SearchResults from "./SearchResults";
export const fetchData = async () => {

  return fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`).then((res)=>res.json())
  // make fetch request to the mentioned api and return the result here
};

function FlightSearch() {
  // on page load fetch the data (useEffect)

  const [data,setData] = useState([])
  const [Filterdata,setFilterData] = useState([])

  const [ Source, setSource] = useState("")
   const [ Destination, setDestination] = useState("")  
   
  useEffect(()=>{
    fetchData()
    .then((res)=>{
      setData(res)
    })
  },[])

  const handleSearch = () => {
     
    let FilterArr = data.filter((el)=>{
      return el.source == Source && el.destination == Destination
    })

    setFilterData([...FilterArr])

    console.log(Filterdata)
    // filter the data based on source and destination
  };



  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input value={Source} onChange={(e)=>setSource(e.target.value)} data-testid="source-input" placeholder="Source" />
          <br /> <br />
          <input value={Destination} onChange={(e)=>setDestination(e.target.value)} data-testid="destination-input" placeholder="Destination" />
          <br /> <br />
          <button onClick={handleSearch} data-testid="search-button">Search</button>
        </section>
      </div>

      {
        Filterdata.length==0 ? <h1  data-testid="no-flights">no flights found</h1>
        :  <SearchResults data={Filterdata}  />

       }








































       
      
    
     
    
      {/* if there are search results pass it to SearchResults components else print no floghts found  */}
    </div>
  );
}

export default FlightSearch;
