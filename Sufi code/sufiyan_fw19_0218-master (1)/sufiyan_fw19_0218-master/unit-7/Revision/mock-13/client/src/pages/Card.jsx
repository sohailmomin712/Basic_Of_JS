import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useToast,
    VStack,
    
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action_Add_Jobs, ACTION_REMOVE_JOBS } from '../redux/auth/auth.actions';


export default function SingleCard({
    _id,
    name,
    location,
    contract,
    jobrole,
}) {
    
    const toast = useToast();
    const  { isAuthenticated, token,  loading , error, userData, myJobs } = useSelector((store)=> store.auth)

    const [check,SetCheck] = useState(false)


    const dispatch = useDispatch()
    const DeleteKaro = ()=>{

    dispatch(ACTION_REMOVE_JOBS({id : _id}))

    }


    const AddKaro = ()=>{
        dispatch(Action_Add_Jobs({ name,
            location,
            contract,
            jobrole,}))
            SetCheck(true)

}





    return (
      <Center key={_id} py={6}>
        <Box
         position={"relative"}
         textAlign="left"
          minW={'350px'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          >
          <Avatar
             position={"absolute"}
            
             right="25"
            size={'lg'}
            src={
               "https://images.designtrends.com/wp-content/uploads/2015/11/20141349/Rhino-Logo-Designs.2.jpg"
            }
            borderRadius="10"
            
        
            alt={'Avatar Alt'}
            mb={4}   
          
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Location - {location}
          </Text>

          <Text mt={"-15px"}  fontWeight={400} color={'gray.500'} mb={4}>
            Contract - {contract}  
          </Text>
          <Text mt={"-15px"}  fontWeight={400} color={'gray.500'} mb={4}>
         Jobrole - {jobrole}
          </Text>

  
       {  userData.role=="Admin" 
       ?  <Stack mt={"-7px"} direction={'row'} spacing={4}>
           
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
       
             onClick={DeleteKaro}
              boxShadow={
                ""
              }
              
              colorScheme="blackAlpha"
              >
              Delete
            </Button>
          </Stack>
        : <Stack mt={"-7px"} direction={'row'} spacing={4}>
   
        <Button
          flex={1}
          fontSize={'sm'}
          onClick={AddKaro}
          boxShadow={""} 
          colorScheme={  check ? "whatsapp"  : "blackAlpha"} 
          
          >
       {  check? "Applied"  : "Apply"}        </Button>
      </Stack>

        }
        </Box>
      </Center>
    );
  }