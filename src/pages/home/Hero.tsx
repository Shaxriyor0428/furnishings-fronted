const Hero = () => {
  return (
    <div className="bg-hero-image dark:brightness-50 bg-cover bg-center  font-poppins">
      <div className="flex items-center container justify-end h-[716px]">
        <div className="text-start bg-white dark:brightness-125 dark:bg-zinc-900 dark:bg-opacity-70 bg-opacity-70 p-8 rounded-lg max-w-lg max-[640px]:max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-xl">
          <h4 className="text-sm text-gray-500 dark:text-gray-100 uppercase mb-4">New Arrival</h4>
          <h1 className="text-2xl max-[640px]:text-3xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-[560px] lg:h-[100px] leading-[65px] font-bold text-yellow-600 mb-6">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 dark:text-gray-100 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="w-[210px] h-[60px] bg-bg-primary text-white px-6 py-3 font-bold rounded-sm hover:bg-yellow-700 duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
