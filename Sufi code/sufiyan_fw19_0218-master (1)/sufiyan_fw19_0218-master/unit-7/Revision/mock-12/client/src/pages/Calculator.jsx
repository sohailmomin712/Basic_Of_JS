import { Box, Button, Center, Container, Divider, FormLabel, HStack, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spacer, Tag, TagLabel, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Chart } from '../components/Chart'
import { CALCULATE_ACTION } from '../redux/auth/auth.actions'

const Calculator = () => {

    let initialValue = [{  value:  50 },{ value: 50 }]
  

      const [data, setData] = useState(initialValue)

      const [YearlySlider, setYearlySliderValue] = useState(15000)

      const [TimePeriodSlider, setTimePeriodSliderValue] = useState(5)

      const [InvestedAmount, setInvestedAmount] = useState(0)
      const [TotalInterest, setTotalInterest] = useState(0)
      const [MaturityValue, setMaturityValue] = useState(0)

      const  { isAuthenticated, token,  loading , error } = useSelector((store)=> store.auth)

 
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const toast = useToast()


 const CalculateKaro = ()=>{


        
   dispatch(CALCULATE_ACTION(
    {  InvestmentAmount :  YearlySlider ,
  TimePeriod : TimePeriodSlider  }
   ))
   .then((res)=> {

    if(res.message == "Calculate success"){

    setInvestedAmount(res.TOTALInvestmentAmount)
    setTotalInterest(res.InterestGained)
    setMaturityValue(res.MaturityValue)
    setData([{  value: res.TOTALInvestmentAmount },{ value: res.InterestGained }])

   
        toast({
            title: "Chart Updated",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
    }

    //MaturityValue TOTALInvestmentAmount InterestGained
   })
   


     
     
   
 
      }


      

  return (
    <VStack   >

 
         <HStack mt={50} align="flex-start"  w={"1000px"} borderRadius={20} p={10}  bg={"white"}  >
 
            <VStack spacing={"25px"} flex={"2"}  alignItems={"flex-start"}  >

                <Box  bg={"#f5f4f5"} p={5} borderRadius="2xl" flexDirection={"column"} w="90%" >

                  <HStack >
                  <FormLabel fontSize={"xl"} >Yearly Investment</FormLabel>   
                  <Spacer/>
                  <Tag size={"lg"} key={"lg"} variant='subtle' colorScheme='whatsapp'>
                  
                    <TagLabel fontSize={"xl"} >$ {YearlySlider}</TagLabel>
                  </Tag>
                 </HStack>  
                    
                <Slider colorScheme={"linkedin"}  min={10000} max={150000} defaultValue={15000} onChange={(val) => setYearlySliderValue(val)}>
                  <SliderTrack>
                 <SliderFilledTrack />
                 </SliderTrack>
                 <SliderThumb />
                </Slider>
                </Box>

                <Box  bg={"#f5f4f5"} p={5} borderRadius="2xl" flexDirection={"column"} w="90%" >

                  <HStack >
                  <FormLabel fontSize={"xl"} >Time Period</FormLabel>   
                  <Spacer/>
                  <Tag size={"lg"} key={"lg"} variant='subtle' colorScheme='whatsapp'>
                  
                    <TagLabel fontSize={"xl"} >{TimePeriodSlider} Year</TagLabel>
                  </Tag>
                 </HStack>  
                    
                <Slider colorScheme={"whatsapp"} min={2} max={15} defaultValue={5} onChange={(val) => setTimePeriodSliderValue(val)}>
                  <SliderTrack >
                 <SliderFilledTrack />
                 </SliderTrack>
                 <SliderThumb />
                </Slider>
                </Box>

                <Divider />

                <Box  borderRadius="2xl" flexDirection={"column"} w="90%" >

                   <HStack >
                   <FormLabel fontSize={"xl"} >Rate of Interest</FormLabel>   
                   <Spacer/>
                   <Tag size={"lg"} key={"lg"} variant='subtle' colorScheme='blackAlpha'>
                   
                     <TagLabel fontSize={"xl"} >7.1 %</TagLabel>
                   </Tag>
                   </HStack>  
                     
                  
                   </Box>

                <Divider />

                <Box as='div'  borderRadius="2xl" flexDirection={"column"} w="90%" >

                  <HStack>
                  <Text color="gray.500"  fontSize="xl" display="block" >
                   Invested Amount
                  </Text>
                  <Spacer/>
                  <Text fontWeight={"semibold"} color="black"  fontSize="xl" display="block" >
                   $ {InvestedAmount}
                  </Text>
                  </HStack>

                  <HStack>
                  <Text color="gray.500"  fontSize="xl" display="block" >
                  Total Interest
                  </Text>
                  <Spacer/>
                  <Text fontWeight={"semibold"} color="black"  fontSize="xl" display="block" >
                   $ {TotalInterest}
                  </Text>
                  </HStack>

                  <HStack>
                  <Text color="gray.500"  fontSize="xl" display="block" >
                   Maturity Value
                  </Text>
                  <Spacer/>
                  <Text fontWeight={"semibold"} color="black"  fontSize="xl" display="block" >
                   $ {MaturityValue}
                  </Text>
                  </HStack>
                     
                  
                </Box>
                
            </VStack>

         
        
            <VStack flex={"1"} >

                < HStack> 
                  <HStack>
                  <Tag size={"md"} key={"md"} variant='solid' bg={"#5468ff"} />
                  <Text color="gray.500"  fontSize="xl" display="block" >
                   Total Investment
                  </Text>
                  </HStack>
                 <Spacer/>
                 <HStack>
                  <Tag size={"md"} key={"md"} variant='solid' bg={"#98a4ff"} />
                  <Text color="gray.500"  fontSize="xl" display="block" >
                   Total Return
                  </Text>
                  </HStack>

                  </HStack>
                <Chart data={data} width={400} height={400} />
                <Button size={"lg"} fontSize="3xl" fontWeight={"normal"} colorScheme='whatsapp'
                onClick={CalculateKaro}
                >Calculate</Button>


            </VStack>

         

         </HStack>

     
     
    </VStack>
  )
}

export default Calculator
