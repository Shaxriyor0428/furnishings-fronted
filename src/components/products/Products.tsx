import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
interface IProductProps {
  data: IProduct[];
  title?: string;
}
const Products: FC<IProductProps> = ({ data, title }) => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const productItems = data?.map((product: IProduct) => (
=======
  const productItems = data?.data?.products.map((product: IProduct) => (
>>>>>>> c54cfe304583bb1dc4e206364cdd03e7d5d38b78
    <div
      key={product.id}
      className="relative overflow-hidden group rounded-lg shadow-md"
    >
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="relative w-full overflow-hidden h-[301px] max-[620px]:h-[240px] max-[450px]:h-[200px]"
      >
        <img
          className="w-full h-full bg-no-repeat bg-center bg-cover group-hover:scale-[1.02] duration-300 md:scale-100 cursor-pointer"
          src={`${import.meta.env.VITE_BASE_IMAGE_URL}${product.images[0]}`}
          alt={product.name}
        />
      </div>
      <button className="hover:bg-slate-200 dark:text-black absolute top-1 md:top-2 right-1 md:right-[-30px] duration-300 group-hover:right-2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[20px]">
        <IoMdHeartEmpty className="text-xl" />
      </button>
      <button className="hover:bg-slate-200 dark:text-black absolute top-10 md:top-11 right-1 md:right-[-30px] delay-100 duration-300 group-hover:right-2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[20px]">
        <IoCartOutline className="text-xl" />
      </button>
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
    <div className="container my-10 max-[620px]:my-4">
      <h2 className="font-poppins-bold text-[40px] mb-8 text-center max-[620px]:text-2xl">
        {title ? title : ""}
      </h2>
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2">
        {productItems}
      </div>
    </div>
  );
};

export default memo(Products);
