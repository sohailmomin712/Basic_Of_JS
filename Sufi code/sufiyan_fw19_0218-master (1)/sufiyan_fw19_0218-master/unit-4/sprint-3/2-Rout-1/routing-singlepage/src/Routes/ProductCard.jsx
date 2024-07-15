
import { useNavigate } from "react-router-dom"
export const ProductCard=({el})=>{

const Navigate=useNavigate()

 function VisitSinglePRoduct(){
 Navigate(`/products/${el.id}`)
     
 }


  return(
   
    <div onClick={VisitSinglePRoduct} style={{border:"1px solid green"}} key={el.id}>
       <img src={el.image} width="100px" alt=""/>
    <p>{el.title}</p>
    <h6>{el.price}</h6>
     
     </div>
    

  )
}