import React from 'react'
import { Input,Button,HStack,Wrap,Box,Grid } from '@chakra-ui/react'
import { useState } from 'react'



const AddTodo = ({handleAddServer}) => {
 
     
     const [text , setText] = useState("")

     
     const handleText = (e)=>{
      //  console.log(e.target.value)
        setText(e.target.value)

     }


     const handleSubmit = ()=>{
    //    console.log(text)
        handleAddServer(text)
        setText("")
     }



    return (

        <div >
            <HStack w="50%" margin="auto" >
            <Input value={text} onChange={handleText} variant='outline' placeholder='CHILL ENJOY ADD TODO' />
            <Button  onClick={handleSubmit} colorScheme='yellow'>Add</Button>
            </HStack>
        </div>



    )
}

export default AddTodo
