import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import Loading from './Loading';

const ReporPage = () => {

    const  { data,  loading , error } = useSelector((store)=> store.dogs)


    let Female = data.filter((el=> el.gender == "Female"))
    let Male = data.filter((el=> el.gender == "Male"))

console.log(  Female, Male,)

    if (loading) {
        return <Loading />;
    } 



  return (
    <TableContainer 
    fontSize={"2xl"}
    width={"60%"} margin="auto" border={"1px solid #eeee"} 
    mt="150px" p={5} bg="white" borderRadius={5} >
  <Table size='md'>
    <Thead>
      <Tr>
        <Th>Dogs</Th>
        <Th>Number</Th>
      
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Average age</Td>
        <Td> 2.5</Td>
     
      </Tr>
      <Tr>
        <Td>Female Dogs</Td>
        <Td>{Female.length}</Td>
       
      </Tr>
      <Tr>
        <Td>Male Dogs</Td>
        <Td>{Male.length}</Td>
        
      </Tr>

      <Tr>
        <Td>TOTAL DOGS</Td>
        <Td>{data.length}</Td>
        
      </Tr>

    </Tbody>
   
  </Table>
</TableContainer>
  )
}

export default ReporPage
