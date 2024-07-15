
import './App.css'
import { Center, HStack, IconButton, SimpleGrid, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import Form from './Components/Form'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


import AllRoutes from './Components/routes'


function App() {

  const { colorMode, toggleColorMode } = useColorMode()



  return (
    <div >
          <HStack backgroundColor="blue.500"  h='80px' color='white' padding="50px 50px">
      <Text fontSize="5xl" fontWeight="bold" >REACT FORM</Text>

      <Spacer />
      
            <IconButton boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius={50} colorScheme="white" size="lg" className='toggleTheme'
             icon={
              colorMode === 'light' ? <MoonIcon />: <SunIcon />} 
               onClick={toggleColorMode}>

               {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
            
        
      </HStack>
      <AllRoutes />
    </div >
  )
}

export default App
//[
//  {
//  "name": "SAURABH UBALE",
//  "email": "saurabh@gmail.com",
//  "number": "8880055910",
//  "age": "24",
//  "gender": "Custom",
//  "maritalStatus": "Married",
//  "department": "Front End",
//  "salary": "50K",
//  "image": "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
//  "id": 2,
//  "status": {
//  "name": "SAURABH UBALE",
//  "email": "saurabh@gmail.com",
//  "number": "8880055910",
//  "age": "24",
//  "gender": "Custom",
//  "maritalStatus": "Married",
//  "department": "Front End",
//  "salary": "70K",
//  "image": "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
//  "id": 2,
//  "status": {
//  "name": "SAURABH UBALE",
//  "email": "saurabh@gmail.com",
//  "number": "8880055910",
//  "age": "24",
//  "gender": "Custom",
//  "maritalStatus": "Married",
//  "department": "Front End",
//  "salary": "80K",
//  "image": "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
//  "id": 2,
//  "status": {}
//  }
//  }
//  },
//  {
//  "name": "ABDUL",
//  "email": "Abdul@gmail.com",
//  "number": "9850403540",
//  "age": "26",
//  "gender": "Male",
//  "maritalStatus": "UnMarried",
//  "department": "UI Developer",
//  "salary": "40K",
//  "image": "https://media-exp1.licdn.com/dms/image/C5603AQH5D3XtlLbAnA/profile-displayphoto-shrink_800_800/0/1643100214777?e=1667433600&v=beta&t=aoVt-_3zGYc4OlJY0Pm-D4qPgjjto7OfbsQFsb3K5so",
//  "id": 3
//  },
//  {
//  "name": "SUFIYAN SHAIK",
//  "email": "noorani786.ss@gmail.com",
//  "number": "7770055910",
//  "age": "21",
//  "gender": "Male",
//  "maritalStatus": "UnMarried",
//  "department": "UI Developer",
//  "salary": "80K",
//  "image": "https://i.im.ge/2022/06/26/uuI3g1.png",
//  "id": 5,
//  "status": {
//  "name": "SUFIYAN SHAIK",
//  "email": "noorani786.ss@gmail.com",
//  "number": "7770055910",
//  "age": "21",
//  "gender": "Male",
//  "maritalStatus": "UnMarried",
//  "department": "UI Developer",
//  "salary": "40K",
//  "image": "https://i.im.ge/2022/06/26/uuI3g1.png",
//  "id": 5
//  }
//  },
//  {
//  "name": "HUZAIFA SHEIKH",
//  "email": "HUZAIFA @gmail.com",
//  "number": "5550055910",
//  "age": "22",
//  "gender": "Male",
//  "maritalStatus": "Married",
//  "department": "Back End",
//  "salary": "40K",
//  "image": "https://i.im.ge/2022/09/20/17H7CX.1658464205563.jpg",
//  "id": 6
//  },
//  {
//  "name": "Meher Shaikh",
//  "email": "meher@gmail.com",
//  "number": "8205256502",
//  "age": "18",
//  "gender": "Female",
//  "maritalStatus": "UnMarried",
//  "department": "UX Designer",
//  "salary": "40K",
//  "image": "https://www.whatsappimages.in/wp-content/uploads/2022/01/Girl-DP.jpg",
//  "id": 7
//  },
//  {
//  "name": "Naaz Shaikh",
//  "email": "Naaz@gmail.com",
//  "number": "7770055910",
//  "age": "22",
//  "gender": "Female",
//  "maritalStatus": "Married",
//  "department": "Front End",
//  "salary": "80K",
//  "image": "data:image/jpeg;base64,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",
//  "id": 8
//  }
//  ]