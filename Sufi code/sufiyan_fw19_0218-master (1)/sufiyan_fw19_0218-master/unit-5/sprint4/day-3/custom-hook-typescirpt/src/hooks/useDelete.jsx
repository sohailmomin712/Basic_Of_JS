 
import React, { useEffect, useState } from 'react'

const useDeleteAPI = (apiFn, initialData) => {
  
    const [ loading , setLoading] = useState(false)
    const [ err , seterr] = useState(false)
    const [data, setData] = useState(initialData)

    const execute = async (args)=>{

        setLoading(true)
        try{
          let data = await apiFn(args)
          setData(data)
          setLoading(false)
          seterr(false)

        }catch(err){
         seterr(true)
         setLoading(false) 
        }finally{
            setLoading(false)
        } 
    }

    return { loading , err , data, execute }
}

export default useDeleteAPI
