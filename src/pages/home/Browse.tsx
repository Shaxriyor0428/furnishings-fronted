import diningImg from "../../assets/images/diningImage.png";
import livingImg from "../../assets/images/livingImage.png";
import bedroomImg from "../../assets/images/bedroomImage.png";

const categories = [
  {
    id: 1,
    title: "Dining",
    img: diningImg,
  },
  {
    id: 2,
    title: "Living",
    img: livingImg,
  },
  {
    id: 3,
    title: "Bedroom",
    img: bedroomImg,
  },
];

const Browse = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[32px] max-sm:text-[24px] font-semibold text-[#333333] dark:text-white">
            Browse The Range
          </h2>
          <p className="text-[#666666] dark:text-stone-400 text-[20px] max-sm:text-[16px] mt-2 max-w-2xl mx-auto">
            Discover our collection of beautifully designed furniture to suit
            any space.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <img
                className="w-full h-[480px] md:h-[500px] sm:h-[350px] max-sm:h-[80vh] object-cover rounded-lg"
                src={category.img}
                alt={category.title}
              />
              <h3 className="text-[#333333] font-bold text-center text-xl md:text-2xl max-sm:text-lg dark:text-white pt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/75 dark:bg-black/50 px-4 py-2 rounded-lg">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Browse;
