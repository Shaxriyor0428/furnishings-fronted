import React from "react";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Hero from "./Hero";
import Products from "../../components/products/Products";
import Browse from "./Browse";
import SwiperInfinite from "./swiper_infinite/swiper_infinite";
import Insparation from "./Insparation";


const Home = () => {
  const { data } = useGetProductsQuery({ limit: 8 });
  return (
    <div>
      <Hero />
      <Browse />
      {data && <Products data={data} />}
      <Insparation />
      <SwiperInfinite />
    </div>
  );
};

export default React.memo(Home);
