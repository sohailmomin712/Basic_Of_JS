import React, { useState } from 'react'
import {

    Box,
 
    Button,
    VStack,
 
    FormControl,
    FormLabel,
    Input,

    Select,
 
    useToast,
    Text,
  } from '@chakra-ui/react';
import { Action_Get_Dogs, Action_Post_Dogs } from '../redux/dogs/dogs.actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';




const User = () => {


    const toast = useToast()
    const dispatch = useDispatch()
    const  {  loading , error } = useSelector((store)=> store.dogs)
  
    const initialValue = {
      "Name" : "",
      "Age" : "",
      "Place" : "" ,
      "Gender" : ""
   
   }

   const [formData, setformData] = useState(initialValue);



  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    setformData({ ...formData, [key]: val });
  };




  const ReisterKaro = ()=>{

    if(formData.Name == "" || formData.Age == "" || formData.Place == "" || formData.Gender == "" ) {
        return  toast({
            title: "All Fields Are Mandatory",
           
            status: "warning",
            duration: 1500,
            isClosable: true,
     });
    }

    const dogData = {
        name:  formData.Name, 
        age:  formData.Age, 
        place:  formData.Place, 
        gender:  formData.Gender, 
        image:  "https://media-be.chewy.com/wp-content/uploads/2022/09/27100424/cavalier-king-charles-spaniel-cute-dogs.jpg" 
          
      }


    dispatch(Action_Post_Dogs(dogData))
   .then((res)=> {
    if(res == "success"){
        toast({
            title: "Registration Succesfull",
          
            status: "success",
          
            duration: 4000,
            isClosable: true,
          });
        dispatch(Action_Get_Dogs())

        setformData(initialValue)
    }
   })
  


  }



  
 
 if (loading) {
    return <Loading />;
  } 
 


  return (
    <VStack w="fit-content" margin={"auto"} border={"1px solid #eee"}  bg="white" borderRadius="lg"  mt={"100px"}>
                    <Box  color="#0B0E3F">
                      <VStack  
                      p={5}
                      spacing={{base:3, md:2}}>

                        <FormControl id="name">
                          <FormLabel  >Name of breed</FormLabel>
                            <Input type="text" size="md"
                              onChange={handleChange}
                              value={formData.Name}
                              name="Name"
                              placeholder="Name of breed"
                            />  
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Age of pet</FormLabel>
                           <Input type="text" size="md"
                            onChange={handleChange}
                            value={formData.Age}
                            name="Age"
                            placeholder='Age of pet'
                            />  </FormControl>

                  <FormControl id="name" float="right">
                        <FormLabel>Gender</FormLabel>
                        <Select value={formData.Gender} name="Gender" onChange={handleChange} placeholder='Select'>
                        <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                        

                        </Select>
                   </FormControl>

                        <FormControl id="name">
                          <FormLabel>Place</FormLabel>
                          
                            <Input type="text" size="md"
                               onChange={handleChange}
                               value={formData.Place}
                               name="Place"
                               
                               placeholder='Place'
                            />
                        
                        </FormControl>

         
                      
                        <FormControl id="name" float="right">
                          <Button mt={"22px"}
                          onClick={ReisterKaro}
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Register Dog
                          </Button>
                        </FormControl>




                      </VStack>
                    </Box>

            
                  </VStack>
  )
}

export default User
