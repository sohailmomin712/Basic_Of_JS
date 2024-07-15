
import axios from 'axios'
import React from 'react'
import useFETCH from '../hooks/useFETCH'
import useDeleteAPI from '../hooks/useDelete'
import { useTimeout } from '@chakra-ui/react'
import useMyTimeout from '../hooks/useTimeout'

const getPosts = async ()=> {   
    let res = await axios.get(`http://localhost:8080/posts`)
    let data = res.data
    return data ;
}

const deletePost = async (id)=>{
    let res = await axios.delete(`http://localhost:8080/posts/${id}`)
    let data = res.data
    return data ;
}

const Post = () => {

    const { loading , err , data , reFetch} = useFETCH(getPosts, [])

 const  { loading: deleteLoading, execute } = useDeleteAPI(deletePost)

 
 const ready  = useMyTimeout( 5000 )
 console.log(ready)

if(loading || deleteLoading){

return <h1>...Loading</h1>
}else if(err){
    return <h1>...Error</h1>
}

  return (
    <div>
        <h1>POSTS</h1>
      {  data.map((el)=> (
         <div key={el.id} > {el.content} ---
         <button onClick={()=> {
            execute(el.id)
            reFetch()
         }  } > DELETE </button>
         </div>
      )) }

      <button onClick={()=> reFetch() } >Refresh</button>
    </div>
  )
}

export default Post
