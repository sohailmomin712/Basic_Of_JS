import * as React from 'react';
import { Container, Box, HStack, useColorModeValue, Center } from '@chakra-ui/react';



const ProfileCard = () => {
  const bg = useColorModeValue('white', '#2f3244');
  

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Box
          maxH="400px"
          minH="354px"
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
          <MainScreen />
        </Box>
      </Center>
    </Container>
  );
};

export default ProfileCard;

import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  Fade
} from '@chakra-ui/react';

// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MainScreen = () => {
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
        Muhammad Ahmad
      </Heading>
      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="block"
      >
        Full-Stack Developer
      </Text>
      <Fade in>
        <Text
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'block' }}
          display="none"
        >
          I'm a Full Stack Developer and an open source lover from Pakistan 🇵🇰
        </Text>
      </Fade>
      <Divider />
      <Flex alignItems="center" justify="center" w="100%">
       
      </Flex>
    </VStack>
  );
};



