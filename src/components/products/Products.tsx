import { FC, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import { IoCartOutline } from "react-icons/io5";
import Heart from "./Heart";
import Discount from "./Discount";
interface IProductProps {
  data: IProduct[];
  title?: string;
  grid?: boolean;
}
const Products: FC<IProductProps> = ({ data, title, grid }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const productItems = data?.map((product: IProduct) => (
    <div
      key={product.id}
      className="relative overflow-hidden group rounded-lg shadow"
    >
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className={`relative w-full overflow-hidden  ${
          grid || !pathname.startsWith("/shop")
            ? "h-[301px] max-[620px]:h-[240px] max-[450px]:h-[200px]"
            : "h-[500px] max-[620px]:h-[400px] max-[450px]:h-[300px]"
        } `}
      >
        <img
          className="w-full h-full bg-no-repeat bg-center bg-cover group-hover:scale-[1.02] duration-300 md:scale-100 cursor-pointer"
          src={`${import.meta.env.VITE_BASE_IMAGE_URL}${product.images[0]}`}
          alt={product.name}
        />
      </div>
      <Heart product={product} />
      <button className="hover:bg-slate-200 shadow-md dark:text-black absolute top-12 md:top-12 right-2 md:right-[-40px] delay-100 duration-300 group-hover:right-2 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[20px]">
        <IoCartOutline />
      </button>
      {!!product.discount?.percent && (
        <Discount percent={Number(product.discount?.percent)} />
      )}
      <div className="py-4 px-4  dark:bg-zinc-800 transition-colors duration-300">
        <h2
          title={product.name}
          className="line-clamp-1 text-[24px] font-semibold leading-8 max-[620px]:text-lg"
        >
          {product.name}
        </h2>
        <p
          title={product.description}
          className="line-clamp-1 text-[#898989] text-lg max-[620px]:text-sm"
        >
          {product.description}
        </p>
        <strong className="text-[#3A3A3A] dark:text-slate-200 text-[20px] leading-8 font-semibold max-[620px]:text-[15px]">
          {(
            (product.price * (100 - Number(product.discount?.percent))) /
            100
          ).toLocaleString()}{" "}
          USD
        </strong>
        {!!product.discount?.percent && (
          <s className="ml-2 text-gray-400">
            {product.price.toLocaleString()} USD
          </s>
        )}
      </div>
    </div>
  ));

  return (
    <div className="container my-10 max-[620px]:my-4">
      <h2 className="font-poppins-bold text-[38px] max-sm:text-[25px] mb-8 text-center max-[620px]:text-2xl">
        {title ? title : ""}
      </h2>
      <div
        className={`grid gap-8 ${
          grid || !pathname.startsWith("/shop")
            ? "grid-cols-4  max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2"
            : "max-w-[600px] mx-auto"
        } `}
      >
        {productItems}
      </div>
    </div>
  );
};

export default memo(Products);
