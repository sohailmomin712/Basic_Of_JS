import React, { useState } from 'react'
import { Text,HStack,IconButton, Spacer } from '@chakra-ui/react'

import { CheckIcon, CloseIcon, DeleteIcon, EditIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import EditTodo from './EditTodo'

const Todolist = ({data,handleDelet,handleStatus,handleEditTodo}) => {


   const [EditTrue, setEditTrue ] = useState(false)
   const [tempID, setTeempID] = useState(null)

 const handleList = ()=>{
   setEditTrue(!EditTrue)
   setTeempID(data.id)
   
 }



  return (
   <div>
     <HStack border="1px solid #eeee" borderRadius={5} width="300px" padding={2} >
        <Text >{data.title}</Text>
       <Spacer />
        <IconButton size="sm" onClick={()=>handleList()} icon={<EditIcon />} ></IconButton>      
         <IconButton 
         size="sm"
          icon={
              data.status ? <CheckIcon />: <CloseIcon />} 
          colorScheme={
            data.status ? "whatsapp" : "red" } 
           onClick={()=>handleStatus(data.id,!data.status)}   
               />
         <IconButton size="sm" onClick={()=>handleDelet(data.id)} icon={<DeleteIcon />} ></IconButton>      
     </HStack>

      {EditTrue ? <EditTodo  id={tempID} setEditTrue={setEditTrue} handleEditTodo={handleEditTodo} /> : null}
     </div>
  )
}

export default Todolist
