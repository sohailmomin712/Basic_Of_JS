import React, { useEffect, useReducer, useState } from 'react'
import {Box, Button, Container, Grid, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Spinner, Stack, Text, VStack} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import { NavLink, useSearchParams } from 'react-router-dom'
import { Reducer } from './Reducer'
import { FetchError, FetchSuccess, LoadingHandle } from './Action'
// https://api.github.com/users/sufi7867


const initValue = {
  loading : false,
  err: "",
  data : {}
}

const fetchData = ({text})=>{

  return fetch(`https://api.github.com/users/${text}`)
  .then((res)=>res.json())
   
}

console.log(initValue.data)
const GitHub = () => {

  const [state,dispatch] = useReducer(Reducer,initValue)

   const  [SearchParams, setSerachParam] = useSearchParams()
 
  const [text, setText] = useState("")
 



  useEffect(()=>{
     let Myparam = {q:text}
     setSerachParam(Myparam)
  },[text])

  const handleFetch = async ()=>{
     
    if(text==""){
      alert("plz write something")
      return
    }


    try{
      // it will change loaidng = !=Loading
      
      dispatch(LoadingHandle) 
      
      const res = await fetchData({text})
    //  console.log(res)
    
      const action = FetchSuccess(res)
      dispatch(action) 

      dispatch(LoadingHandle) 
      
    }catch(err){
        console.log(err)
        // it will set error
        dispatch(FetchError)  

    }
 
    setText("")

  }



  return (
    <Stack spacing={50} height="100vh">

     <HStack spacing={50} textAlign="center">
     <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
<Text fontWeight="extrabold" color="red.500" fontSize={["xl","50px","50px",]}>CREATED BY suFi</Text>  <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
      </HStack>
      

      <HStack>
        <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" boxSize="50px" />
        <Text fontSize={["xl","2xl","50px",]} >Search Account On Github</Text>
      </HStack>

     <InputGroup size='md'>
     <Input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        pr='4.5rem'
        type={"text"}
        placeholder='Search Github User or type sufi7867'
      />
    
       <InputRightElement >
       <IconButton 
       onClick={handleFetch}
       aria-label='Search database' icon={<SearchIcon/>} />
      </InputRightElement>
       
      </InputGroup>

     
      {
        state.loading ? <h1>...Loading</h1> : 
        state.data != {} &&
        <VStack>
          <Text fontSize={["xl","2xl","50px",]} >User Name : {state.data.login}</Text>
          <Text fontSize={["xl","2xl","50px",]} > Name : {state.data.name}</Text>
          <Text>Bio :  {state.data.bio}</Text>
          <Text fontSize={["xl","2xl","50px",]} >Public Repo : {state.data.public_repos}</Text>
          <HStack>
            <Text fontSize={["xl","2xl","50px",]} >Followers : {state.data.followers}</Text>
            <Text fontSize={["xl","2xl","50px",]} >Following : {state.data.following}</Text>
          </HStack>
          <Image boxSize={["100px","200px","250px"]} src={state.data.avatar_url}  alt={state.data.login} />
          <a fontSize="50px" href={state.data.html_url} target="_blank" > ---- CLCIK Here Check Github ACcount {state.data.login} ----</a>
        </VStack>
      }

      



<Box bg='tomato' w='100%' p={4} color='white'>
  
</Box>
      
    </Stack>
  )
}

export default GitHub
