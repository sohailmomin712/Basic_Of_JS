import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Loading from "./Loading";
import { ProductCard } from "./ProductCard";

export default function Products() {

const {data,loading,setloading}=useContext(AppContext)
console.log(data)

 if(loading){
   return <Loading/>
 }

  return <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",}}>
     {
       data.map((el)=>(
       <ProductCard el={el}/>
       ))
     }



  </div>;
}
