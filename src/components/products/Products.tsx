import { FC, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import Heart from "./Heart";
import Discount from "./Discount";
import CartButton from "./CartButton";

interface IProductProps {
  data: IProduct[];
  title?: any;
  grid?: boolean;
}
const Products: FC<IProductProps> = ({ data, title, grid }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const productItems = data?.map((product: IProduct) => (
    <div key={product.id} className="relative overflow-hidden group rounded-lg shadow bg-white dark:bg-zinc-800">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className={`relative w-full overflow-hidden cursor-pointer transition-all duration-300 ${
          grid || !pathname.startsWith("/shop")
            ? "h-[301px] max-[620px]:h-[240px] max-[450px]:h-[180px]"
            : "h-[500px] max-[620px]:h-[400px] max-[450px]:h-[300px]"
        } `}
      >
        <img
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-300"
          src={`${import.meta.env.VITE_BASE_IMAGE_URL}${product.images[0]}`}
          alt={product.name}
        />
      </div>

      <div className="absolute top-2  right-2 flex flex-col gap-2 max-sm:gap-1">
        <Heart product={product} />
        <CartButton product={product} />
      </div>

      {!!product.discount?.percent && (
        <Discount percent={Number(product.discount?.percent)} />
      )}

      <div className="p-4 dark:bg-zinc-800 transition-colors duration-300">
        <h2 className="line-clamp-1 text-[20px] font-semibold leading-8 max-[620px]:text-lg">
          {product.name}
        </h2>
        <p className="line-clamp-1 text-gray-500 dark:text-gray-300 text-sm">
          {product.description}
        </p>
        <strong className="text-gray-900 dark:text-white text-lg font-semibold">
          {product.price.toLocaleString()} USD
        </strong>
        {!!product.discount?.percent && (
          <s className="ml-2 text-gray-400">
            {(
              product.price /
              (1 - Number(product.discount?.percent / 100))
            ).toLocaleString()}{" "}
            USD
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
