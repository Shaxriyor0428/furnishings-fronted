import { memo } from "react";
import { IGetResponseProducts, IProduct } from "../../types";

const Products = ({ data }: { data: IGetResponseProducts }) => {
  const productItems = data?.data?.products.map((product: IProduct) => (
    <div
      key={product.id}
      className="relative overflow-hidden rounded-lg shadow-md"
    >
      <div className="relative w-full h-[301px] max-[620px]:h-[240px]  max-[450px]:h-[200px]">
        <img
          className="w-full h-full bg-no-repeat bg-center bg-cover hover:scale-[1.02] duration-300"
          src={`${import.meta.env.VITE_BASE_IMAGE_URL}${product.images[0]}`}
          alt={product.name}
        />
      </div>

      <div className="py-4 px-4 bg-[#F4F5F7] dark:bg-zinc-800 transition-colors duration-300">
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
          {product.price.toLocaleString()} USD
        </strong>
      </div>
    </div>
  ));

  return (
    <div className="container my-14 max-[620px]:my-4">
      <h2 className="font-poppins-bold text-[40px] mb-8 text-center max-[620px]:text-2xl">
        Our products
      </h2>
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2">
        {productItems}
      </div>
    </div>
  );
};

export default memo(Products);
