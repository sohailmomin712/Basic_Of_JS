import { Box, HStack, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action_Get_Dogs } from '../redux/dogs/dogs.actions';
import DogCard from './CardDog';
import Loading from './Loading';

const DataPage = () => {

    const  { data,  loading , error } = useSelector((store)=> store.dogs)


    const [ Dogs, SetDogs ] = useState([])

    const dispatch = useDispatch()

    useEffect(()=>{

      dispatch(Action_Get_Dogs())
      SetDogs([...data])
      //console.log(Dogs)
      
    },[])
 
 


    if (loading) {
        return <Loading />;
    } 
    

  return (
    <Stack style={{ marginTop: "20px" }}>
    <Stack justify="center" style={{ margin: "auto", marginTop: "20px" }}>
      <VStack spacing={5}>
        {/* <Text color="#9097AB" fontWeight="bold" > HOME / ELECTRONICS </Text> */}

        <Text align="center" fontSize="20" fontWeight="bold">
          All Dogs
        </Text>
      </VStack>

      <HStack
        spacing={50}
        width={{ base: "100%", lg: "1200px" }}
        justify="stretch"
      >
        <SimpleGrid
          padding={5}
          spacing={5}
          columns={{ base: 2, md: 3, lg: 4 }}
        >
          {Dogs?.map((el) =>  (
          <DogCard key={el.id} {...el} />
          )
          )}
        </SimpleGrid>
      </HStack>
    </Stack>
  </Stack>
  )
}

export default DataPage
