import { memo } from "react";
import { IGetResponseProducts, IProduct } from "../../types";

const Products = ({ data,isLoading }: { data: IGetResponseProducts }) => {
  const productItems = data?.data?.products.map((product: IProduct) => (
    <div
      key={product.id}
      className="relative overflow-hidden rounded-lg shadow-md flex flex-col"
    >
      <div className="relative w-full h-[301px] max-[620px]:h-[200px] max-[430px]:h-[160px]">
        <img
          className="w-full h-full object-cover"
          src={`${import.meta.env.VITE_BASE_IMAGE_URL}${
            product.images?.[0] || ""
          }`}
          alt={product.name}
        />
      </div>

      <div className="py-4 px-4 bg-[#F4F5F7] flex-grow transition-colors duration-300">
        <h2
          title={product.name}
          className="line-clamp-1 text-[24px] font-semibold leading-8 max-[620px]:text-[18px] max-[430px]:text-[16px]"
        >
          {product.name}
        </h2>
        <p
          title={product.description}
          className="line-clamp-1 text-[#898989] text-lg max-[620px]:text-sm max-[430px]:text-xs"
        >
          {product.description}
        </p>
        <strong className="text-[#3A3A3A] text-[20px] leading-8 font-semibold max-[620px]:text-[15px] max-[430px]:text-[14px]">
          {product.price.toLocaleString()} USD
        </strong>
      </div>
    </div>
  ));

  return (
    <div className="container my-14 max-[620px]:my-4">
      <h2 className="font-poppins-bold text-[40px] mb-8 text-center max-[620px]:text-2xl">
        Our Products
      </h2>
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:grid-cols-2 max-[620px]:gap-4">
        {productItems}
      </div>
    </div>
  );
};

export default memo(Products);
