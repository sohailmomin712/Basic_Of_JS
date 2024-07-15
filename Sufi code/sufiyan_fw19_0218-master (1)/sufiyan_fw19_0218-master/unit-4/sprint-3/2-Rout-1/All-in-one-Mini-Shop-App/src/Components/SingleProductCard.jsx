import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Contexts/AppContextProvider'
import style from "./ProductCart.module.css"


const FetChData = ({ id }) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
};

function SingleProductCard() {


    const [data, setData] = useState({})

    const [ isLoading , setLoading ] = useState(true)

    // id is a string so we need to convert it to number
    const { id } = useParams()
   /// console.log(typeof(id))

    
    console.log(data);
    
    useEffect(()=>{
      handleFetch()
    }, [])

    const handleFetch = async () => {
      try {
        setLoading(true);
        const res = await FetChData({ id });
        //  console.log(res);
        setData(res);
        setLoading(false);
      } catch (err) {
        
        console.log(err);
      }
    };
  




  //If loading true
  if(isLoading){
    return (
        <div>
            <div><h1>.... Loading</h1></div>
            <div>
                <img width="500px" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" srcset="" />
            </div>
        </div>
    )
  }

  return (
    <div className={style.mainSingleDiv} >

        <div className={style.mainImageDiv} >
          
          <div className={style.sideImageBar}  >

           <img src={data.image} alt={data.title}  width="80%" height="520px"/>
           <img src={data.image} alt={data.title}  width="80%" height="520px"/>
           <img src={data.image} alt={data.title}  width="80%" height="520px"/>
           <img src={data.image} alt={data.title}  width="80%" height="520px"/>
          </div>

          <div className={style.mainImage}  >  <img src={data.image} alt={data.title}  width="80%" height="520px"/>
          </div>

          
          <div className={style.poductDet} >
             
             <h1>{data.title}</h1>
             
             <div   >
             <h2 
             style={{fontSize: "35px", padding: "2px 30px", backgroundColor: "rgb(74, 74, 129)", color:"white", borderRadius: "10px", textAlign : "right", marginTop: "10px" }} >
                {`₹  ${data.price}`}</h2>
             <h3 style={{marginTop: "20px"}} >Category : {data.category}</h3>
             </div>

             <div style={{display : "grid",  justifyContent: "center", marginTop: "-10px", padding: "30px", gap: "15px"}}  >
                       <button className={style.cartBtn} >
                  Add To cart
                </button>
                <button className={style.buyBtn} >
                  Quick Now
                </button>

             </div>
             
             <div style={{marginTop :"-30px"}} >
                    <img src="https://nmkonline.com/images/pages/tumbleweed.gif" alt="" width="80%" />
                </div>
           
          </div>




        </div>


        <br />
       
      
        <div style={{textAlign:  "left"}} >
            <h2>Description</h2>
        <p style={{fontSize:"20px"}}>{data.description}</p>
        
    </div>
     
      
    </div>
  )
}

export default SingleProductCard
