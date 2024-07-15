import { FormControl, FormLabel, HStack, IconButton, Select, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'


import { AppContext } from '../Context/AppContext'
import EmployeeCard from './EmployeeCard'
import Pagination from './pagination'
import { AiOutlineFilter, AiOutlineSortDescending, AiOutlineSortAscending  } from "react-icons/ai";
import { BiReset  } from "react-icons/bi";
// //
// 
// Math.ceil(totalProduct/limit)
// {data,
//     handleDelet,
//     totalProduct,
//     limit,
//     page,setPage,
//     handleEditData,
//     setupdateButton
// 
// }


const AllEmployee = () => {


    const { data ,
      titleSortBy,
      settitleSortBy,
        totalProduct,
        limit,
        page,setPage,FilterBy,
        setFilterBy,
        FilterByGender,
setFilterByGender
         } = useContext(AppContext)
 


    //console.log(data)
    //     // handleDelet(id)
  return (
    <div>
        <HStack bg="darkorange"  h='80px' color='white' padding="25px 50px">
        <Text fontSize="2xl" >All Employee</Text>
        </HStack>

         <VStack  padding="30px" spacing={5} border="1px solid grey" >

          <SimpleGrid width="full" columns={[1,2]} spacing={5} >

            {
                data?.map((el)=>(
                    <EmployeeCard data={el} key={el.id}  />
                    ))
            }
          
         </SimpleGrid>

         <Pagination
             totalPages={Math.ceil(totalProduct/limit)}
             currentPage={page}
             handlePageChange={(page)=>setPage(page)}
             />

      <HStack w="full" justifyContent="space-around" >

      
           <HStack  padding="0px 30px" >
           {
          titleSortBy==="desc" ? (
            <IconButton
          onClick={()=>settitleSortBy(titleSortBy === "asc" ? "desc" : "asc" )}
          size='lg'
          aria-label='Call Sage'
          fontSize='40px'

          
          icon={< AiOutlineSortAscending/>}
          />
          ) : (
            <IconButton
          onClick={()=>settitleSortBy(titleSortBy === "asc" ? "desc" : "asc" )}
          size='lg'
          aria-label='Call Sage'
          fontSize='40px'   
          icon={<AiOutlineSortDescending />}
          />

          )
         }

           <Text padding="0px 20px" bg="telegram.50" fontSize="xl" color="facebook.900">
             Sort by Name
          </Text>

          </HStack>
         
         <HStack padding="0px 30px">
         <IconButton
          size='lg'
          aria-label='Call Sage'
          fontSize='40px'   
          icon={<AiOutlineFilter />}
          />
              <Select
               value={FilterBy} onChange={(e)=>setFilterBy(e.target.value)}
               name="department" 
               placeholder='Select Department'>
                <option value="Full_Stack" >Full_Stack</option>
                <option value="Front_End" >Front_End</option>
                <option value="Back_End" >Back_End</option>
                <option value="UI_Developer" >UI_Developer</option>
                <option value="UX_Designer" >UX_Designer</option>
              </Select>
              <IconButton
          onClick={()=>setFilterBy(null)}
          size='lg'
          aria-label='Call Sage'
          fontSize='40px'

          
          icon={< BiReset/>}
          />
     

         </HStack>
    
         <HStack padding="0px 30px">
         <IconButton
          size='lg'
          aria-label='Call Sage'
          fontSize='40px'   
          icon={<AiOutlineFilter />}
          />
              <Select
               value={FilterByGender} onChange={(e)=>setFilterByGender(e.target.value)}
               name="department" 
               placeholder='Select Gender'>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Custom" >Custom</option>
              </Select>
              <IconButton
          onClick={()=>setFilterByGender(null)}
          size='lg'
          aria-label='Call Sage'
          fontSize='40px'

          
          icon={< BiReset/>}
          />
     

         </HStack>


      </HStack>
       



         </VStack>
      
    </div>
  )
}

export default AllEmployee
