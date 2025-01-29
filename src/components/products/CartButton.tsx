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
      className="bg-white p-1 rounded text-primary hover:bg-primary-light transition"
    >
      {cartData?.some((cart) => cart.id === product.id) ? (
        <IoCart />
      ) : (
        <IoCartOutline className="text-lg text-primary" />
      )}
    </button>
  );
};

export default React.memo(CartButton);
