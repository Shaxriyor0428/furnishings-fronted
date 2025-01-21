import { RootState } from "@/redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/redux/features/counter-slice";
import { useGetProductsQuery } from "@/redux/api/product-api";
import { IProduct } from "@/types";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery({priceOrder:"desc"});
  
  return (
    <div>
      <h2>Home {count}</h2>
      <button onClick={() => dispatch(increment())}>Click</button>
      <div>
        {data?.data?.products?.map((product: IProduct) => (
          <div key={product.id}>
            <img src={import.meta.env.VITE_IMAGE_URL + product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
