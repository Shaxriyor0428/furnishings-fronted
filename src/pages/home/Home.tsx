import React from "react";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Hero from "./Hero";
import Products from "../../components/products/Products";

const Home = () => {
  const { data } = useGetProductsQuery({});

  return (
    <div>
      <Hero />
      {data && <Products data={data} />}
    </div>
  );
};

export default React.memo(Home);
