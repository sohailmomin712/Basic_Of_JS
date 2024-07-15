
import {useState} from "react"

function getData(){

    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(res=>{
       return  res.json()
    })

}



function Posts(){

    const [text, setText] = useState("")
    const [posts, setposts] = useState([])

    const handleFetchData = async ()=> {

        try{

            const data = await getData()
            setposts(data)
        }
        catch(err){
            console.log(err)
        }
    }
    console.log(posts)
    const handleChange = (e) =>{
        setText(e.target.value)
       // console.log(e.target.value)
    }
 //   console.log(text)
    const addText = ()=>{
        let OBJ = {
            body: text,
            id: posts.length ,
            title: text,
            userId: 1
        }
        setposts([...posts,OBJ])
        setText("")
    }

    return (
        <>
        <div style={{marginTop: "50px"}} >
            <input value={text} onChange={handleChange} type="text" />
            <button onClick={addText} >ADD POST</button>
        </div>   
        <div>
            <h3>Posts</h3>
            <button onClick={handleFetchData}> GET POSTS</button>

           <ul>
            {posts.map(el =>
             <li key={el.id}> {el.title} </li>
             )}
           </ul>
        </div>      
        </>
    )
}
export default Posts