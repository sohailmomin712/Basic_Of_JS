import React, { useState } from 'react'
import { useEffect } from 'react'
import AddTodo from './AddTodo'
import { Button,IconButton ,useColorMode,VStack, HStack, Text } from '@chakra-ui/react'
import { ArrowUpDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import Todolist from './Todolist'
import { getTodos, addTodoToServer, deletTodosServer, toggleTodoServer, EditTodoServer } from "../api/todos"
import EditTodo from './EditTodo'




 

const Todo = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [titleSortBy, settitleSortBy] = useState("ASC")
  const [page,setPage ] = useState(1)
 
 
 useEffect(()=>{

    handleGetTodos()

 },[page,titleSortBy])

  
 const handleGetTodos = ()=>{
 
   setLoading(true)

   getTodos({
    titleSortBy,
    page
   })
   .then(res=>{
   // console.log(res)
    setData(res)
    setLoading(false)
   })
   .catch(err=>{
    setLoading(true)
    console.log(err)
   })

 }

 const handleAddServer = (text)=>{
     
   setLoading(true)

   const item = {
    title : text,
    status : false,
   }  

  // console.log(item)

   addTodoToServer(item)
   .then(res=>{
    console.log(res)
    handleGetTodos()
    setLoading(false)
   })
   .catch(err=>{
    console.log(err)
    setLoading(true)
   })


 }

 const handleDelet = (id)=>{

  setLoading(true)

   deletTodosServer(id)
   .then(res=>{
    console.log(res)
    handleGetTodos()
    setLoading(false)
   })
   .catch(err=>{
    console.log(err)
    setLoading(true)
   })
 }

 const handleStatus = (id, newStatus)=>{
  //console.log(id, newStatus)
  setLoading(true)

  toggleTodoServer(id,newStatus)
  .then(res=>{
    console.log(res)
    handleGetTodos()
    setLoading(false)
   })
   .catch(err=>{
    console.log(err)
    setLoading(true)
   })

 }

 const handleEditTodo = (newText, id)=>{

   //   console.log(newText,id)
   setLoading(true)

   EditTodoServer(newText, id)
   .then(res=>{
    console.log(res)
    handleGetTodos()
    setLoading(false)
   })
   .catch(err=>{
    console.log(err)
    setLoading(true)
   })

 }


 const handlePageChange = (change=1)=>{
  setPage(page+change)
 }


 if(loading){
  return (
    <div>
              <Button
              marginBottom="-7.5rem"
           size='md'
           height='48px'
           width='200px'
           border='2px'
           colorScheme="whatsapp"
         >
           TODO WITH CRUD
         </Button>
      <header>
            <IconButton colorScheme="linkedin" size="lg" className='toggleSort'
             icon={
            <ArrowUpDownIcon />} 
            onClick={()=>settitleSortBy(set=>set==="ASC"? "DESC":"ASC")}
               >
               
            </IconButton>
      </header>
       <header>
            <IconButton colorScheme="linkedin" size="lg" className='toggleTheme'
             icon={
              colorMode === 'light' ? <MoonIcon />: <SunIcon />} 
               onClick={toggleColorMode}>
               {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
      </header>

      

      <AddTodo  handleAddServer={handleAddServer} />
 
     
     <VStack  marginTop="1rem">

     <Button
    isLoading
    loadingText='Loading'
    colorScheme='teal'
    variant='outline'
    spinnerPlacement='start'
  >
    Submit
  </Button>

      </VStack>

     
      <HStack margin="auto" justify="center" marginTop={5} >

      <Button size="md" disabled={page===1} onClick={()=>handlePageChange(-1)} colorScheme='whatsapp'>PREV</Button>
      <Button size="md" colorScheme='gray'>{page}</Button>
      <Button size="md" onClick={()=>handlePageChange(1)} colorScheme='whatsapp'>NEXT</Button>
     
      </HStack>
  
    
      <VStack marginTop = "5" >
      <Text color="gray.400" > CRUD OPERATION | PAGINATION | USE EFFECT </Text>
      <Text color="gray.400" > EDIT | TOGGLE | DELET = with CRUD </Text>
      <Text color="gray.400" > LIGHT | DARK THEME & SORTING </Text>
      </VStack>
    </div>

    
  )
 }

  return (
    <div>
     
     <HStack justify="center" marginTop="1rem" marginBottom="-35px">
     <Button
       isLoading
      
       colorScheme='pink'
       variant='outline'
       />
       <Button
       isLoading
      
       colorScheme='pink'
       variant='outline'
       />
  
     </HStack>

              <Button
              marginBottom="-7.5rem"
           size='md'
           height='48px'
           width='200px'
           border='2px'
           colorScheme="whatsapp"
         >
           TODO WITH CRUD
         </Button>
      <header>
            <IconButton colorScheme="linkedin" size="lg" className='toggleSort'
             icon={
            <ArrowUpDownIcon />} 
            onClick={()=>settitleSortBy(set=>set==="ASC"? "DESC":"ASC")}
               >
               
            </IconButton>
      </header>
       <header>
            <IconButton colorScheme="linkedin" size="lg" className='toggleTheme'
             icon={
              colorMode === 'light' ? <MoonIcon />: <SunIcon />} 
               onClick={toggleColorMode}>
               {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
      </header>

      

      <AddTodo  handleAddServer={handleAddServer} />
 
     
     <VStack  marginTop="1rem">

            {
                data?.map((el)=>(
                  <Todolist  handleEditTodo={handleEditTodo} data={el} handleDelet={handleDelet} handleStatus={handleStatus}/>
                  ))
            }

      </VStack>

     
      <HStack margin="auto" justify="center" marginTop={5} >

      <Button size="md" disabled={page===1} onClick={()=>handlePageChange(-1)} colorScheme='whatsapp'>PREV</Button>
      <Button size="md" colorScheme='gray'>{page}</Button>
      <Button size="md" onClick={()=>handlePageChange(1)} colorScheme='whatsapp'>NEXT</Button>
     
      </HStack>
  
    
      <VStack marginTop = "5" >
      <Text color="gray.400" > CRUD OPERATION | PAGINATION | USE EFFECT </Text>
      <Text color="gray.400" > EDIT | TOGGLE | DELET = with CRUD </Text>
      <Text color="gray.400" > LIGHT | DARK THEME & SORTING </Text>
      </VStack>
    </div>

    
  )
}

export default Todo
