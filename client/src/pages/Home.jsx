import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Heading from "../components/Heading.jsx";
import BestSeller from "../components/BestSeller.jsx";
import Policy from "../components/Policy.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../context/productsSlice.js";
import Loading from "../utils/Loading.jsx";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { client, loading, error } = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  if(error){
    return toast.error('something went wrong')
  }
  return (
    <div>
      <Hero />
      <Heading text1={"Latest Collections"} text2={"Offer's Limited"} />

      {loading ? <Loading bar={'bar'}/> : <Latest client={client} />}

      <Heading text1={"Best Seller's"} text2={"Offer's Limited"} />

      {loading ? <Loading spinner={'spinner'}/> : <BestSeller client={client} />}
      <Policy />
    </div>
  );
};

export default Home;