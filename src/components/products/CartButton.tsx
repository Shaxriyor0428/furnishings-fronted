import { addCart } from "@/redux/features/cart-slice";
import { IProduct } from "@/types";
import React from "react";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";

const CartButton = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart.value);

  return (
    <button
      onClick={() => dispatch(addCart(product))}
      className="hover:bg-slate-200 shadow-md dark:text-black top-1 duration-300 group-hover:right-2 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[20px]"
    >
      {cartData?.some((cart) => cart.id === product.id) ? (
        <IoCart />
      ) : (
        <IoCartOutline />
      )}
    </button>
  );
};

export default React.memo(CartButton);
