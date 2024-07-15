import React from 'react'
import { Input,Button,HStack,Wrap,Box,Grid } from '@chakra-ui/react'
import { useState } from 'react'



const EditTodo = ({setEditTrue,id,handleEditTodo}) => {
 
     
     const [text , setText] = useState("")
     
     
     const handleText = (e)=>{
      //  console.log(e.target.value)
        setText(e.target.value)

     }


     const handleSubmit = ()=>{
        

     //console.log(text,id)

     if(text == undefined || text == "" || text == null  ){
        setEditTrue(false)
       
     }else{

        handleEditTodo(text,id)
        setEditTrue(false)
     }
     
     
      // handleAddServer(text)
      // setText("")
     }



    return (

        <div  style={{marginTop:"0.5rem"}}  >
            <HStack w="80%" margin="auto" >
            <Input size="sm" value={text} onChange={handleText} variant='outline' placeholder='Edit Here' />
            <Button size="sm"  onClick={handleSubmit} colorScheme='yellow'>EDIT</Button>
            </HStack>
        </div>



    )
}

export default EditTodo
