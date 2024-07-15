import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Loading from "./Loading";

const FetChData = ({ user_id }) => {
  return fetch(`https://fakestoreapi.com/products/${user_id}`).then((res) =>
    res.json()
  );
};

export const SingleProductPage = () => {
  
  const { id: user_id } = useParams();
  console.log(user_id);

  const [Datas, setData] = useState({});
  const [loading, setloading] = useState(true);

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
      setloading(true);
      console.log(err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <img src={Datas.image} width="100px" alt="err" />
      <p>{Datas.title}</p>
      <h6>{Datas.price}</h6>
      <p>{Datas.description}</p>
    </div>
  );
};
