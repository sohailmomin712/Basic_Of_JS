import { useState } from "react"

function Image(){

     const [file, setFile] = useState(0)

     const handleChange=(e)=>{

        setFile(URL.createObjectURL(e.target.files[0]))

     }


    return(

        <div>

               <h1>Add Image</h1>
               <input type="file" onChange={handleChange} />
               <br />
               <img src={file} alt=""  />

        </div>
        


    )
}

export default Image 