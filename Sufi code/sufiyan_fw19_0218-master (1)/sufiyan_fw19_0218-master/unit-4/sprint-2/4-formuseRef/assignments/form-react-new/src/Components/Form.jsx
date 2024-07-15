import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, InputGroup, InputLeftElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Select, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import { addDataToJson } from '../api'
import { AppContext } from '../Context/AppContext'


const Form = () => {

  const  {HandleEmotionData,updateButton,formData
    ,setFormData,initValue,updateToServer,loading} = useContext(AppContext)

    const [isSubmit, setisSubmit] = useState(false)

    const handleFormData = (e)=>{
       const { name: key, value,  } = e.target 
       setFormData({...formData, [key]:value})
    }
 
    const HandleAddData = () =>{
   
      setisSubmit(true)

      addDataToJson(formData)
      .then(res=>{
          console.log(res)
         // handleGetTodos()
         setisSubmit(false)
         HandleEmotionData()
      })
      .catch( err=>{
        setisSubmit(false)
      })
 
      setFormData(initValue)
     

  }

  return (
    <div>


    <HStack bg="green.600"  h='80px' color='white'  padding="25px 50px">
        <Text fontSize="2xl" >Employee Details</Text>
    </HStack>

    <VStack padding="5% 10%" spacing={5} border="1px solid grey" >
        
       
    
       <FormControl isRequired>
         <FormLabel>Full Name</FormLabel>
         <Input  value={formData.name} 
          name="name"
           onChange={handleFormData}
         placeholder='Full Name' />
       </FormControl>

       <FormControl isRequired>
         <FormLabel>Enter Email</FormLabel>
         <Input   name="email" value={formData.email} 
           onChange={handleFormData}
         placeholder='Email Address' />
       </FormControl>

       <FormControl isRequired>
       <FormLabel>Phone Number</FormLabel>
       <InputGroup>
       
          <InputLeftElement
            pointerEvents='none'
            children={<PhoneIcon color='gray.300' />}
          />
          <Input  value={formData.number}
            name = "number"   onChange={handleFormData}
          type='tel' placeholder='Phone number' />
        </InputGroup>
        </FormControl>

        <HStack w="full">
    
        <FormControl isRequired>
         <FormLabel>Age</FormLabel>
         <Input   name = "age" onChange={handleFormData}  
         value={formData.age}
         placeholder='Age' />
       </FormControl>
       <Spacer />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select
           onChange={handleFormData}  
           name="gender" 
           value={formData.gender}
           placeholder='Select Gender'>
            <option>Male</option>
            <option>Female</option>
            <option>Custom</option>
           
          </Select>
        </FormControl>
      

       


        </HStack>

       <HStack w="full">

       <FormControl as='fieldset'>
           <FormLabel as='legend'>Marital Status</FormLabel>

           <Flex 
        
            >
             <Box
             name="maritalStatus"
           onChange={handleFormData}
           value={formData.maritalStatus} spacing='24px'>
              
               <Radio  name="maritalStatus" value='Married'>Married</Radio>
              
             </Box>

             <Spacer />

             <Box
             name="maritalStatus"
             onChange={handleFormData}
             value={formData.maritalStatus} spacing='24px'>
              
               <Radio  name="maritalStatus" value='UnMarried'>UnMarried</Radio> 
             </Box>


           </Flex>
         
         </FormControl>

         <Spacer />


  

       </HStack>
    
 

       <HStack w="full">
       <FormControl>
          <FormLabel>Department</FormLabel>
          <Select 
           onChange={handleFormData}  
           name="department" 
           value={formData.department} placeholder='Select Department'>
            <option>Full_Stack</option>
            <option>Front_End</option>
            <option>Back_End</option>
            <option>UI_Developer</option>
            <option>UX_Designer</option>
          </Select>
        </FormControl>
       <Spacer />
        <FormControl>
          <FormLabel>Salary</FormLabel>
          <Select 
           onChange={handleFormData}  
           name="salary" 
           value={formData.salary} placeholder='Enter Salary'>
            <option>40K</option>
            <option>50K</option>
            <option>60K</option>
            <option>70K</option>
            <option>80K</option>
          </Select>
        </FormControl>
       </HStack>

       <FormControl isRequired>
         <FormLabel>Profile Photo</FormLabel>
         <Input name = "image" onChange={handleFormData}  
         value={formData.image} placeholder='Paste Link' />
       </FormControl>


       <HStack w="full">

       {
        isSubmit ? (
            <Button isLoading textAlign="start" colorScheme='whatsapp' size='lg'>
        Submit
      </Button>
        ) : (
            <Button onClick={HandleAddData} textAlign="start" colorScheme='whatsapp' size='lg'>
        Submit
      </Button>
        )
       }
       <Spacer />



       {
        updateButton ? (
          <Button onClick={updateToServer} textAlign="start" colorScheme='orange' size='lg'>
          Update Data
        </Button>
        ) : <Text>..</Text> 
       }

     


       
       </HStack>



      
      
    </VStack>

    </div>
  )

  
}

export default Form
