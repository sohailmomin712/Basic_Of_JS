
import React from "react";
import { useState } from "react";


const AddTodo = ({handleAdd}) =>{

    const [text, setText] = useState("")

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const handleSubmit= ()=>{

        handleAdd(text)
       
    }

    // handleDelet(id)

    return (

        <div>
            <div>
                <input onChange={handleChange} type="text" placeholder="Will get Placed Dont Worrie" />
                <button onClick={handleSubmit} >ADD</button>
            </div>
        </div>



    )

}

export default AddTodo