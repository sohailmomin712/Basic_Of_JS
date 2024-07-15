import * as React from 'react';
import { Container,  useColorModeValue, Center, Box,
    Text,
    Heading,
    Flex,
    Avatar,
    Link,
    VStack,
    IconButton,
    Divider,
    Fade } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Profile = () => {
  const bg = useColorModeValue('white', '#2f3244');
 
//console.log(userData)
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <VStack spacing={"50px"} >
        <Box
        
        
          w="345px"
          boxShadow="lg"
          rounded="md"
          p={6}
          overflow="hidden"
          cursor="pointer"
          _hover={{ boxShadow: 'lg' }}
          bg={bg}
          role="group"
        >
          <MainScreen  />
        </Box>

        <Text  fontSize="3xl" >Hover on Card to see Additional Details</Text>
        </VStack>
      </Center>
    </Container>
  );
};

export default Profile;


const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MainScreen = () => {
    const  { isAuthenticated, token,  loading , error, userData } = useSelector((store)=> store.auth)
  return (
    <VStack spacing={5}>
      <motion.div whileHover={{ y: -5, scale: 1.1 }}>
        <Box boxShadow="xl" _hover={{ boxShadow: 'lg' }} borderRadius="full">
          <Avatar
            _groupHover={{ width: '5rem', height: '5rem' }}
            size="xl"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
        </Box>
      </motion.div>
      <Heading fontSize="xl" fontFamily="body" textTransform="capitalize" noOfLines={2}>
        {userData.username}
      </Heading>
      <Text
        color="gray.500"
        fontSize="xl"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="block"
      >
          {userData.email}
      </Text>
     
      
      <Fade in>
        <Text
          color="gray.500"
          fontSize="lg"
          w={"300px"}
          _groupHover={{ display: 'block' }}
          display="none"
        >
          Token : {userData.token}
        </Text>
        
      </Fade>
      <Divider />
      <Flex alignItems="center" justify="center" w="100%">
      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="block"
      >
          {userData.time}
      </Text>
      </Flex>
    </VStack>
  );
};



