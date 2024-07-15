import LoadingIndicator from "./LoadingIndicator";
import {fetchData} from "./api.js"
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesCard";




function Countries() { 

  const [data, setData] = useState([])

  const [total,setTotal] = useState(0)

  const [page, setPage] = useState(1)
  const [limit,setlimit] = useState(10)

  const [Loading, setLoading] = useState(false)
  
  useEffect(()=>{

    handleFetch(page)
      
  },[page])

  const handleFetch = async ()=>{

    try{
      setLoading(true)
      const res = await fetchData({page,limit})
      const {data, totalPages} = res
      setData(data)
      setTotal(totalPages)
      setLoading(false)
    }catch(err){
      setLoading(false)
      console.log(err)
    }
    
  }

  const handlePage = (change)=>{
    setPage(page + change)
  }

  console.log(data,total)

   if(Loading){

     return <LoadingIndicator />;
   
   }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        
        {/* Countries Card */}

        {
          data?.map((el)=> (
            <CountriesCard 
              country={el.country}
             population={el.population} />
          ))
        }
      </div>
      <div>

        {/* Pagination */}
        <Pagination 
        total = {total}
        current = {page}
        onChange = {handlePage}
        
        />
      </div>
    </div>
  );
}

export default Countries;
