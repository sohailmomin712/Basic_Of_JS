import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,

  } from '@chakra-ui/react';
  





  export default function DogCard({
id,
name,
age,
place,
gender,
image,    
  }) {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                image ? image : "https://media.istockphoto.com/id/636475496/photo/portrait-of-brown-puppy-with-bokeh-background.jpg?s=612x612&w=0&k=20&c=Ot63dQOYplm0kLJdlSVWbtKGwGkuZfnfdwH5ry9a6EQ="
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
           
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            From - {place}
          </Text>

          <Text mt={"-15px"}  fontWeight={400} color={'gray.500'} mb={4}>
            Age - {age} / Gender - {gender}
          </Text>
       
  
          <Stack mt={"-7px"} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Edit
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
       
          
              boxShadow={
                '0px 1px 25px -5px rgb(128 90 213 / 48%), 0 10px 10px -5px rgb(128 90 213 / 43%)'
              }
             
              colorScheme="purple"
              >
              Delete
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }