import { RootState } from "@/redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/redux/features/counter-slice";
import { useGetProductsQuery } from "@/redux/api/product-api";

import Browse from "@/pages/home/browse";

const Home = () => {
  const { data } = useGetProductsQuery({ order: "desc" });

  return (
    <div>
      <Browse />
    </div>
  );
};

export default React.memo(Home);
