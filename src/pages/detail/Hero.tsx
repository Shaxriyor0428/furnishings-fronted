import { useGetSingleProductQuery } from "@/redux/api/product-api";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const Hero = () => {
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(Number(id));
  const navigate = useNavigate();
  return (
    <div className="bg-[#F9F1E7] dark:bg-zinc-800">
      <div className="container py-7">
        <span
          onClick={() => navigate("/")}
          className="font-medium cursor-pointer mr-5 text-[#9F9F9F] dark:text-gray-300 hover:text-bg-primary duration-300"
        >
          Home
        </span>
        <MdOutlineArrowForwardIos className="inline-block dark:text-gray-100 mr-5 text-black" />
        <span
          onClick={() => navigate("/shop")}
          className="font-light cursor-pointer mr-5 text-[#9F9F9F] dark:text-gray-300 hover:text-bg-primary duration-300"
        >
          Shop
        </span>
        <MdOutlineArrowForwardIos className="inline-block mr-5 dark:text-gray-100 text-black" />
        <span className="text-[#9F9F9F] text-[28px] mr-7">|</span>
        {product && <span className="text-[16px]">{product.name}</span>}
      </div>
    </div>
  );
};

export default Hero;
