import React, { ChangeEvent, FormEvent, useState } from 'react'


type TodoInputProps = {
  onAdd : Function ; 
}

const TodoInuput = ( props : TodoInputProps  ) => {

  const { onAdd } = props ;

  const [ value , setvalue ] = useState<string>("")
 
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
         setvalue(event.target.value)
  }

  const handleSubmit = (event : FormEvent<HTMLFormElement>)=>{
   event.preventDefault()
   if(value.length > 0){
    onAdd(value)
    setvalue("")
   }
  }


  return (
    <form onSubmit={handleSubmit} >
      <input  type="text"    onChange={handleChange}  /> 
      <button  type="submit"  >ADD</button>
    </form>
  )
}

export default TodoInuput
