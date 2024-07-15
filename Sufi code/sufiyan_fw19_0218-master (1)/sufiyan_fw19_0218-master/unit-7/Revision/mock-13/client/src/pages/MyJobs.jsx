import { Box, Button, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const MyJobs = () => {

    const  { isAuthenticated, token,  loading , error, userData, myJobs } = useSelector((store)=> store.auth)


  return (
    <VStack p={5} mb="5">
      <Heading fontWeight={"900"} p={5} mb="5" >Applied Jobs</Heading>

      <SimpleGrid spacing={5} columns={2} >
        {
            myJobs.map((el)=>(
              <Box boxShadow={"2xl"} borderRadius={5} bg="white" key={el.name}  p={5}>
                Company Name : {el.name}
              </Box>
           ))
        }
      </SimpleGrid>


         

    </VStack>
  )
}

export default MyJobs
