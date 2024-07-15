import { useEffect } from "react";
import { useState } from "react";
import { children, createContext } from "react";
import axios from "axios"
// step 1 createContext
export const AppContext = createContext()






// step 2 custom function 
export const AppContextProvider = ({children})=>{

    // for authantication 
    const [isAuth, setAuth] = useState(false)

    const [userDetail, setuserDetail] = useState([])
   // to user data who login 

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const [productsData, setproductsData] = useState([])


    
  useEffect(() =>{

    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{
        console.log(res.data)
        // passing all data to contextProvider
        handlePRODUCTDATA(res.data)
       
      
    })
    .catch((err)=>{
     
        console.log(err)
    })

  },[])





    //to add data in provider
    const handlePRODUCTDATA = (data)=>{
        setproductsData(data)
    }

    console.log(productsData)




// provider             ,
    return (

        //Provider Created 
        <AppContext.Provider 
            value={{
            isAuth,
            productsData,
            handlePRODUCTDATA }}  >

           {children}

        </AppContext.Provider>

    )
}