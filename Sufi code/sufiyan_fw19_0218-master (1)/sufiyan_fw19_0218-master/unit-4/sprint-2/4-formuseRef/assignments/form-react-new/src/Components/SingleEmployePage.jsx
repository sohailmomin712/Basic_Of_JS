import { Badge, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const FetChData = ({ user_id }) => {
    return fetch(`http://localhost:4000/employee?id=${user_id}`).then((res) =>
    res.json()
  );
};

 const SingleEmployePage = () => {
  
  const { id: user_id } = useParams();
  console.log(user_id);

  const [Datas, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      setloading(true);
      const res = await FetChData({ user_id });
      //  console.log(res);
      setData(res);
      setloading(false);
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  console.log(Datas)

  if (err) {
    return (
      <>
        <h1>NO PRODUCT FOUND</h1>
        <Link to="/products">GO TO PRODUCT</Link>
      </>
    );
  }

  if (loading) {
    return (
      <VStack marginTop="10%">
            <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif" />
      </VStack>
    )
  }

  return (
    <VStack backgroundColor="whiteAlpha.100" margin="auto" marginTop="50px" border="1px solid gray" borderRadius={5} width="50%" padding={5} >

      
    <HStack w="full" bg="green.600"  h='80px' color='white'  padding="25px 50px">
        <Text fontSize="2xl" >Employee Details</Text>
    </HStack>

    <Image w src={Datas[0].image} width="300px" alt="err" borderRadius="100%" />

      <VStack  width="full" bg="whiteAlpha.100" alignItems="left" padding={5} >
      
      <Text fontSize="2xl" > {`Name :  ${Datas[0].name}`}</Text>
      <Text fontSize="2xl" > {`DepartMent : ${Datas[0].department}`}</Text>
      <Text fontSize="2xl" > {`Employee Salary : ${Datas[0].salary}`}</Text>

      <Text fontSize="2xl" > {`Email : ${Datas[0].email}`}</Text>
      <Text fontSize="2xl" > {`Number : ${Datas[0].number}`}</Text>
     
      <Text fontSize="2xl" > {`Gender : ${Datas[0].gender}`}</Text>
      <Text fontSize="2xl" > {`Age : ${Datas[0].age}`}</Text>
      <Text fontSize="2xl" > {`MArrital Status : ${Datas[0].maritalStatus}`}</Text>

      </VStack>
      

      <VStack alignItems="flex-end" w="full">
      <Link to="/"  >
      <Badge fontSize="20px" colorScheme='purple' padding="5px 50px" >GO TO HOME</Badge>
       </Link>
      </VStack>
    </VStack>
  );


};

export default SingleEmployePage
