import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import trophy from "/assets/trophy 1.png";
import warranty from "/assets/guarantee.png";
import shipping from "/assets/shipping.png";
import c_support from "/assets/customer-support.png";

const Info = () => {
  const items = [
    { img: trophy, title: "High Quality", desc: "Crafted from top materials" },
    { img: warranty, title: "Warranty Protection", desc: "Over 2 years" },
    { img: shipping, title: "Free Shipping", desc: "Order over $150" },
    { img: c_support, title: "24 / 7 Support", desc: "Dedicated support" },
  ];

  return (
    <div className="bg-[#FAF3EA] dark:bg-zinc-800 font-poppins mt-20 py-10">
      <div className=" py-8 max-lg:py-4 max-md:my-2">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          
          modules={[Autoplay]}
        >
          {items.concat(items).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="w-[60px] h-[60px] grid place-items-center dark:bg-white px-2 rounded-xl">
                  <img src={item.img} alt={item.title} className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-[#242424] dark:text-white font-semibold text-lg lg:text-xl">
                    {item.title}
                  </p>
                  <p className="text-[#898989] font-medium text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Info;