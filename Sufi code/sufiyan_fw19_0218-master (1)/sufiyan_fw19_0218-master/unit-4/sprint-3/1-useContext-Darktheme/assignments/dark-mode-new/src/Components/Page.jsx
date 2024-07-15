import React from 'react'
import { useState } from 'react'
import { Divider, Flex, HStack, IconButton ,Image,Slider,SliderFilledTrack,SliderThumb,SliderTrack,Spacer,Stack,Switch,Text,useColorMode, VStack } from '@chakra-ui/react'
import {  EditIcon, InfoIcon, MoonIcon, Search2Icon, SettingsIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons'

const data = [

    {
      img:"https://i.pinimg.com/736x/aa/96/eb/aa96eb876b004c60a83f815558695daf.jpg",
      name:"Naaz",
      ccc:"Junior Developer",
      points:"1400",
      level:"16"  
    },
    {
        img:"https://i.im.ge/2022/07/29/FwZXw1.jpg",
        name:"suFi",
        ccc:"BlockChain Developer",
        points:"21400",
        level:"86"  
      },
      {
        img:"https://i.im.ge/2022/07/29/Fwb5aG.jpg",
        name:"Saurabh",
        ccc:"Senior Developer",
        points:"1400",
        level:"36"  
      },
]


const Page = () => {

    const [isDarkMode, serDark] = useState(false)

    const { colorMode, toggleColorMode } = useColorMode()

    const Light = {
        mainDIv : {
            width:"100%",
        
          display:"grid",
        gridTemplateColumns:"0.7fr 10fr",
        position:"absolute",
        height:"100vh"
       
        },
        leftDiv:{
            display:"grid",
            gridTemplateRows:"1fr 10fr 1fr",
        padding:"20px",
        boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        },
        cards:{
            width:"100%",
        
          display:"grid",
          gridTemplateRows:"1fr 1fr 1fr",
        },


    }




  return (
    <Stack  style={Light.mainDIv} >
       
       <VStack   style={Light.leftDiv} >
        
        <VStack><Image borderRadius={50} width="80px" src='https://i.im.ge/2022/07/29/FwZXw1.jpg' /></VStack>

         <VStack>

         <IconButton colorScheme="facebook" size="lg" 
             icon={<InfoIcon  />} >
            </IconButton>
         <Divider />

         <Text fontSize="2xl" ><Search2Icon /></Text>
         <Divider />
         <Text fontSize="2xl" ><EditIcon /></Text>
         <Divider />
         <Text fontSize="2xl" >< ViewIcon/></Text>
         <Divider />
         <Text fontSize="2xl" >< StarIcon/></Text>
         <Divider />
         <Text fontSize="2xl" ><SettingsIcon /></Text>
         <Divider />
         </VStack>

         <VStack>
         <IconButton colorScheme="whatsapp" size="lg" className='toggleTheme'
             icon={<InfoIcon />} >
            </IconButton>
         </VStack>
        </VStack>

       <VStack padding="10px 50px"  bg="whiteAlpha.100" alignItems="left" >

        <HStack spacing={10} >
            <Text>MY DASHBORD</Text>
            <Text>DARK KMODE</Text>
          
                
            <header>
            <IconButton colorScheme="linkedin" size="lg" className='toggleTheme'
             icon={
              colorMode === 'light' ? <MoonIcon />: <SunIcon />} 
               onClick={toggleColorMode}>

               {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
            
           </header>
           <Switch  onChange={toggleColorMode} colorScheme='teal' size='lg' />
            
        </HStack>

        <VStack style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} w="35%" padding="10px" bg="whiteAlpha.100">
            
            <HStack >
                <Text fontWeight="bold" fontSize="2xl" fontFamily="monospace">Active Users</Text>
             <Spacer />
            <Text>for 2020</Text>
            </HStack>
         
         <VStack style={Light.cards}>

            {
                
               data.map((el)=>(
                
                
                <VStack padding="20px" >

                <HStack w="100%" spacing={5} >
                    <Image src={el.img} width="70px" borderRadius={50} />
                    
                    <VStack alignItems="left"  >
                        <Text fontSize="2xl" >{el.name}</Text>
                        <Text marginTop="-20px" color="gray.500" >{el.ccc}</Text>
                    </VStack>
                    <Spacer />
                    <Text><ViewIcon /></Text>
                </HStack>

                <Slider aria-label='slider-ex-1' defaultValue={Math.floor(Math.random() * 100)}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>

                <HStack >
                <Text>Proffesional Level {el.level}</Text>
                <Spacer />
                 <Text>{el.points} Points</Text>
                </HStack>


         
               </VStack>
             
               
               ))



            }
            </VStack>

        </VStack>


        </VStack>

    
      
    </Stack>
  )
}

export default Page
