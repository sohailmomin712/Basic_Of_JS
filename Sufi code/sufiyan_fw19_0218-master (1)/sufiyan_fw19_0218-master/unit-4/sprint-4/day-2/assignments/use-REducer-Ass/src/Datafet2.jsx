import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
import reducer from './reducer'

const initialState={
    loading:true,
    error:'',
    post:{}
}



function Datafet2() {
  
    const[state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://reqres.in/api/users')
        .then(res=>{
          dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(err=>{
          dispatch({type:'FETCH_ERROR'})
    })
},[])


  return (
    <div className="container my-3">
    {state.loading?'Loading':state.post.data.map((el)=>(
      <div  key={el.id} className="col-3">
                <div  className="card" style={{ width: '15rem', padding: "1rem" }}>
                  <img src={el.avatar} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{el.first_name}</h5>
                    <p className="card-text">{el.last_name}.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
    ))}
   { state.error?error:null} 
  </div>
  )
}

export default Datafet2
