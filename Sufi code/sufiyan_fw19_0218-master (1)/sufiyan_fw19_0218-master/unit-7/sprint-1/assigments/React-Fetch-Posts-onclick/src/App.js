import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
function App() {

  const [data , setData] = useState([])

 const fetchData = ()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>res.json())
  .then((res)=> setData(res))
  .catch((e)=>console.log(e))
 }
  

  return (
    <div className="App" data-testid="app">
      <button
      onClick={fetchData}
        id="get-posts-btn"
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {
          data.map((el,i)=>(
            <Post key={i} data={el}  />
          ))
        }
      </div>
    </div>
  );
}

export default App;
