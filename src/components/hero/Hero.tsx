import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = ({ title,path }: { title: string,path:string }) => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-main-hero-image bg-cover bg-center font-poppins">
      <div className="absolute inset-0 bg-black opacity-0 dark:opacity-50"></div>
      <div className="flex items-center container justify-center h-[316px] relative z-10">
        <div className="flex flex-col justify-center items-center">
          <p className="w-[124px] h-[72px] text-[48px] leading-[72px] font-medium">
            {title}
          </p>
          <p className="text-[16px] leading-[24px] flex items-center justify-center gap-1">
            <span
              onClick={() => navigate("/")}
              className="font-medium cursor-pointer hover:text-bg-primary duration-300"
            >
              Home
            </span>
            <MdOutlineArrowForwardIos className="inline-block" />
            <span
              onClick={() => navigate(path)}
              className="font-light cursor-pointer hover:text-bg-primary duration-300"
            >
              {title}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
