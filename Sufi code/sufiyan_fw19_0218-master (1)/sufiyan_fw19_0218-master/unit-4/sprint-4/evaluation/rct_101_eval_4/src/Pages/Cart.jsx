import { Button, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;



const Cart = () => {

  const {cartData,TotalPrice, handleCart,handleRemove} = useContext(CartContext)



  return (
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>PRODUCT NAME</Th>
        <Th>PRICE</Th>
        <Th >Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        cartData.map((el)=>(
          <Tr>
          <Td>{el.title}</Td>
          <Td>{el.price}</Td>
          <Td > <Button onClick={()=>handleRemove(el.id)} >REMOVE</Button></Td>
          </Tr>
        ))
      }
    </Tbody>
  </Table>
  <Text fontSize="5xl">TOTAL : Rs. {TotalPrice}</Text>
</TableContainer>
  )
};

export default Cart;
