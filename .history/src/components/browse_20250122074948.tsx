const Browse = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-2xl font-semibold">Browse The Range</h2>
          <p className="text-[#666666] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="bg-[#F8F8F8] py-8 px-4 rounded flex flex-col items-center gap-3">
            <img
              className="w-full max-w-[381px] h-[350px] object-cover rounded-md"
              src="https://picsum.photos/400/300"
              alt="Product"
            />
            <h3 className="text[#3333336] font-bold">Dining</h3>
          </div>
          <div className="bg-[#F8F8F8] py-8 px-4 rounded flex flex-col items-center gap-3">
            <img
              className="w-full max-w-[381px] h-[350px] object-cover rounded-md"
              src="https://picsum.photos/400/300"
              alt="Product"
            />
            <h3 className="text[#3333336] font-bold">Living</h3>
          </div>
          <div className="bg-[#F8F8F8] py-8 px-4 rounded flex flex-col items-center gap-3">
            <img
              className="w-full max-w-[381px] h-[350px] object-cover rounded-md"
              src="https://picsum.photos/400/300"
              alt="Product"
            />
            <h3 className="text-[#333333] font-bold">Bedroom</h3>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};

export default Browse;
