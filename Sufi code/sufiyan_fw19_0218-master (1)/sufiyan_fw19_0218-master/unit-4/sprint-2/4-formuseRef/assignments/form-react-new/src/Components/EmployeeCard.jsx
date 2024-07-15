import { ArrowForwardIcon, DeleteIcon, PhoneIcon } from '@chakra-ui/icons'
import { Badge, Button, HStack, IconButton, Image, Spacer, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiOutlineEdit, AiFillDelete,   } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';



const EmployeeCard = ({data}) => {

// console.log(data)


const { 
    handleDelet,
    handleEditData,
    setupdateButton,updateButton,seteditedID } = useContext(AppContext)


    const manageEdit = ()=>{
        handleEditData(data.id)
        seteditedID(data.id)
        setupdateButton(!updateButton)
    }

  return (

<Stack bgColor="whiteAlpha.100" width="full"  border="1px solid gray" borderRadius={10} >


      <HStack  w="full" textAlign="left" padding="10px 20px" spacing={5}>
         
         <VStack  >
         <Image borderRadius={20} src={data.image} height="150px" width="150px" minW="150px" />
         </VStack>

        <VStack  alignItems="left" spacing={1} >

       
            <Text fontSize="xl" >{data.name}</Text>
            <Text fontSize="xl" >{data.number}</Text>
            
            <Text fontSize="xl" >{data.salary}</Text>

           <Link to={`/employee/${data.id}`}>
          <Button size='sm' w="150px" rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                View More
             </Button>
          </Link> 


         </VStack>

         <Spacer />

         <VStack  divider={<StackDivider         borderColor='gray.200' 
         
         />}
          spacing={4}>

             <IconButton
             onClick={manageEdit}
               variant='solid'
               colorScheme='linkedin'
               aria-label='Call Sage'
               fontSize='20px'
               icon={<AiOutlineEdit />}
             />
             <IconButton
               onClick={()=>handleDelet(data.id)}
               variant='solid'
               colorScheme='linkedin'
               aria-label='Call Sage'
               fontSize='20px'
               icon={<AiFillDelete />}
             />
             




             
              


         </VStack>

      </HStack>

      
      <Badge  w="full" variant='subtle' fontSize="xl"
       padding="5px 10px" colorScheme='green' textAlign="center">
          {data.department}
      </Badge>
     <Spacer />
      
</Stack>
      
   
  )
}

export default EmployeeCard
