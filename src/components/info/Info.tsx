import trophy from "@/../public/assets/trophy 1.png";
import warranty from "@/../public/assets/guarantee.png";
import shipping from "@/../public/assets/shipping.png";
import c_support from "@/../public/assets/customer-support.png";

const Info = () => {
    return (        
        <div className=" bg-[#FAF3EA] dark:bg-zinc-800 font-poppins mt-20">
            <div className="container">
                <div className="flex justify-between h-[270px]">
                    <div className="flex gap-[10px] justify-center items-center">
                        <div className="w-[60px] h-[60px] grid place-items-center dark:bg-white px-1 rounded-2xl">
                            <img src={trophy} alt="" className="" />
                        </div>
                        <div className="flex flex-col gap-[2px] h-[70px]">
                            <p className="h-[38px] text-[#242424] dark:text-white font-semibold text-[25px] leading-[37.5px]">
                                High Quality
                            </p>
                            <p className="h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">
                                crafted from top materials
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <div className="w-[60px] h-[60px] grid place-items-center dark:bg-white px-1 rounded-2xl">
                            <img src={warranty} alt="" className="" />
                        </div>
                        <div className="flex flex-col gap-[2px] h-[70px]">
                            <p className="h-[38px] text-[#242424] dark:text-white font-semibold text-[25px] leading-[37.5px]">
                                Warranty Protection
                            </p>
                            <p className="h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">
                                Over 2 years
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <div className="w-[60px] h-[60px] grid place-items-center dark:bg-white px-1 rounded-2xl">
                            <img src={shipping} alt="" className="" />
                        </div>
                        <div className="flex flex-col gap-[2px] h-[70px]">
                            <p className="h-[38px] text-[#242424] dark:text-white font-semibold text-[25px] leading-[37.5px]">
                                Free Shipping
                            </p>
                            <p className="h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">
                                Order over 150 $
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <div className="w-[60px] h-[60px] grid place-items-center dark:bg-white px-1 rounded-2xl">
                            <img src={c_support} alt="" className="" />
                        </div>
                        <div className="flex flex-col gap-[2px] h-[70px]">
                            <p className="h-[38px] text-[#242424] dark:text-white font-semibold text-[25px] leading-[37.5px]">
                                24 / 7 Support
                            </p>
                            <p className="h-[30px] text-[#898989] font-medium text-[20px] leading-[30px]">
                                Dedicated support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
