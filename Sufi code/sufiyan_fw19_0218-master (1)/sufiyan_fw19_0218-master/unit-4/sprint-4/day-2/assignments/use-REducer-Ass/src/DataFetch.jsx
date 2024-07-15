import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/users')
        .then(res=>{
            setLoading(false)
            setPost(res.data)
        })
        .catch(err=>{
            setLoading(false)
            setPost([])
            setError('Something is Wrong')
    })
},[])

  return (
    <div className="container my-3">
      {loading?'Loading':post.data.map((el)=>(
        <div className="col-3">
                  <div key={el.id} className="card" style={{ width: '15rem', padding: "1rem" }}>
                    <img src={el.avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{el.first_name}</h5>
                      <p className="card-text">{el.last_name}.</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
      ))}
     { error?error:null} 
    </div>
  )
}

export default DataFetch
