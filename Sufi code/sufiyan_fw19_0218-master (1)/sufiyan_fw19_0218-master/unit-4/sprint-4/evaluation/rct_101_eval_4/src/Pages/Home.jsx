import { Badge, Box, Button, Divider, Image, SimpleGrid, Spacer, Text, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { addToCart } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContextProvider";

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

// https://fakestoreapi.com/products



const Home = () => {

  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setisError] = useState(false)


  useEffect(()=>{
    
    setIsLoading(true)
    axios.get(`https://fakestoreapi.com/products`)
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      setisError(true)
      setIsLoading(false)
      console.log(err)
    })


  },[])

  const {state} = useContext(AuthContext)
  const {authStatus} = state

  const {cartData,TotalPrice, handleCart} = useContext(CartContext)
  const toast = useToast()
 

  const handleAddToCart = (el)=>{

    handleCart(el)
   
  }

  if(!authStatus){ 
    return <VStack  justifyContent="center" border="1px solid" borderColor="gray.300" padding={5} borderRadius={5}>

         <Link to="/login">
         <Button colorScheme="linkedin">LOGIN FIRST TO SEE DATA</Button>
         <br/> <br/>
         <Text>Click Here GO TO LOGIN PAGE</Text>
         </Link>

    </VStack>
  }

  return isLoading ? (
    <Text fontSize="4xl" >...Loading</Text>
  ) : (
    <VStack w="80%"  justifyContent="center" border="1px solid" borderColor="gray.300" padding={5} borderRadius={5}>

      <SimpleGrid spacing="50px" h="full" columns={{sm: 2, md: 3, lg:4}} >

      {
        data?.map((el)=>(
          

          <VStack boxShadow="md" padding={5} key={el.id} maxW="sm" borderWidth="1px" borderRadius="lg" >
           
           <Image w="100%" alt={el.name} src={el.image} h="100%"/>
            
            <Spacer />

            <VStack w="full"  alignItems="left" spacing={5}>
            <Text as="b" overflow="hidden" >Title : {el.title}</Text>
            <Text   >Type : {el.category}</Text>
            <Badge fontSize="xl" padding="0px 20px" variant="subtle" colorScheme="green" >Rs. {el.price}</Badge>
            <Button onClick={()=>handleAddToCart(el)} colorScheme="linkedin" >Add To Cart</Button>
            </VStack>
            
        

          </VStack>

        ))
      }

      </SimpleGrid>


  </VStack>
  )
};

export default Home;
