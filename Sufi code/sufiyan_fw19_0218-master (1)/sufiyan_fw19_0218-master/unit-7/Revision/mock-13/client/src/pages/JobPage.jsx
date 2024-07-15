import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Select, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { ACTION_GET_JOBS } from '../redux/auth/auth.actions';
import SingleCard from './Card';



const JobPage = () => {

  const  { isAuthenticated,  loading , error , Jobs:data} = useSelector((store)=> store.auth)

 

    const [ Jobs, SetJobs ] = useState([...data])
    const [searchBy, setSearchBy] = useState('');

    const dispatch = useDispatch()
      
   
    useEffect(()=>{


       SetJobs([...data])
       
       
     },[loading])

    useEffect(()=>{

     dispatch(ACTION_GET_JOBS())
      SetJobs([...data])
      
      
    },[])


 // const SortJobsData =(value)=>{
 //     //console.log(value)
//
 //     if(value == "asc"){
 //         let data = Jobs.sort((a,b)=> +b.age - +a.age)
 //         SetJobs([...data])
 //     }else if(value == "dsc"){
 //         
 //         let data = Jobs.sort((a,b)=> +a.age - +b.age)
 //         SetJobs([...data])
 //     }
//
 //     
 // }
 
  const FilterJobsbyLocation =(value)=>{
    //console.log(value
        let datas = data.filter((el)=> el.location == value)
        SetJobs([...datas]) 
}

const FilterJobsbyContract =(value)=>{
    //console.log(value
        let datas = data.filter((el)=> el.contract == value)
        SetJobs([...datas]) 
}


const ResetKaro =()=>{
  //console.log(value
      
      SetJobs([...data]) 
}
  
 


    if (loading) {
        return <Loading />;
    } 

    
    

  return (
    <Stack >
    <VStack justify="center" >
      <VStack    justifyContent={"center"} spacing={5}>
        {/* <Text color="#9097AB" fontWeight="bold" > HOME / ELECTRONICS </Text> */}

        <Text align="center" fontSize="20" fontWeight="bold">
          .....
        </Text>

        <HStack  >

        <FormControl id="name" float="right">
                        <FormLabel>Filter By Location</FormLabel>
                        <Select bg={"white"}  onChange={(e)=>FilterJobsbyLocation(e.target.value)} placeholder='Select'>
                           <option value='Pune'>Pune</option>
                           <option value='Bangalore'>Bangalore</option>
                           <option value='Nashik'>Nashik</option>
                           <option value='Goa'>Goa</option>
                        </Select>
        </FormControl>

        <FormControl id="name" float="right">
                        <FormLabel>Filter By Contract</FormLabel>
                        <Select bg={"white"}  onChange={(e)=>FilterJobsbyContract(e.target.value)} placeholder='Select'>
                           <option value='Part Time'>Part Time</option>
                           <option value='Full Time'>Full Time</option>
                        </Select>
        </FormControl>


        <FormControl id="name" float="right">
                     
        <FormLabel>Serach</FormLabel>
        <Input bg="white" value={searchBy} 
          onChange={(e) => setSearchBy(e.target.value)} 
          placeholder='Search' />
        </FormControl>

        <FormControl id="name" float="right">
             <FormLabel>RESET</FormLabel>
             <Button onClick={ResetKaro} w={"full"} colorScheme={"blackAlpha"} >Reset</Button>
                       
        </FormControl>






        </HStack>

        <h1>FILTER SEARCH all WORKING TOGETHER</h1>

        
      </VStack>

      <HStack
        spacing={50}
        width={{ base: "100%", lg: "1200px" }}
      
       justifyContent={"center"}
      >
         
        <SimpleGrid
        
          padding={5}
          spacing={5}
          columns={{ base: 2, md: 3, lg: 3 }}
        >
          {Jobs.filter((el) =>
                  el.name
                    .toLowerCase()
                    .includes(searchBy.toLocaleLowerCase())
                )
                ?.map((el) =>  (
          <SingleCard key={el._id} {...el} />
          )
          )}
        </SimpleGrid>
      </HStack>
    </VStack>
  </Stack>
  )
}

export default JobPage
