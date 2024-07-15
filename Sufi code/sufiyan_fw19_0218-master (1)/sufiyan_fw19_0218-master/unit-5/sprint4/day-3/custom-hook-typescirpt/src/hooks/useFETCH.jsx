 

import React, { useEffect, useState } from 'react'

const useFETCH = (apiFn, initialData) => {
  

    const [ loading , setLoading] = useState(false)
    const [ err , seterr] = useState(false)
    const [data, setData] = useState(initialData)



    const execute = async ()=>{

        setLoading(true)

        try{
          let data = await apiFn()
          setData(data)
          
          setLoading(false)
          seterr(false)

        }catch(err){
         seterr(true)
         setLoading(false)
         console.log(err)
        
        }finally{
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        execute()
    }, [])


    return { loading , err , data, reFetch: execute }
}

export default useFETCH
