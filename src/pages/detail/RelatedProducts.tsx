import { useState } from "react";
import { Link } from "react-router-dom";
import { IGetResponseProducts, IProduct } from "../../types";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const RelatedProducts = ({ data }: { data: IGetResponseProducts }) => {
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>(data?.data?.products.slice(0, 4));

  const showMoreProducts = () => {
    const nextProducts = data?.data?.products.slice(visibleProducts.length, visibleProducts.length + 4);
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  const handleProductClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productItems = visibleProducts.map((product: IProduct) => (
    <div
      key={product.id}
      className="relative overflow-hidden group rounded-lg shadow-md"
    >
      <Link to={`/product/${product.id}`} onClick={handleProductClick}>
        <div className="relative w-full overflow-hidden h-[301px] max-[620px]:h-[240px] max-[450px]:h-[200px]">
          <img
            className="w-full h-full bg-no-repeat bg-center bg-cover group-hover:scale-[1.02] duration-300 md:scale-100"
            src={`${import.meta.env.VITE_BASE_IMAGE_URL}${product.images[0]}`}
            alt={product.name}
          />
        </div>
      </Link>
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
    <div className="container my-10 max-[620px]:my-4 mt-20">
      <h2 className="font-normal text-[36px] mb-8 text-center max-[620px]:text-2xl">
        Related Products
      </h2>
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2">
        {productItems}
      </div>
      {visibleProducts.length < data?.data?.products.length && (
        <div className="text-center mt-6">
          <button
            onClick={showMoreProducts}
            className="px-14 py-2 border border-[#B88E2F] text-[#B88E2F] text-lg "
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
