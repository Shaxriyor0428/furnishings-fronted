import trophy from "/assets/trophy 1.png";
import warranty from "/assets/guarantee.png";
import shipping from "/assets/shipping.png";
import c_support from "/assets/customer-support.png";

const Info = () => {
  return (
    <div className="bg-[#faf3ea] py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 max-sm:grid-cols-2  gap-8 text-center">
          <div className="flex flex-col items-center">
            <img src={trophy} alt="High Quality" className="w-14 h-14 mb-3" />
            <h4 className="text-lg font-semibold">High Quality</h4>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={warranty}
              alt="Warranty Protection"
              className="w-14 h-14 mb-3"
            />
            <h4 className="text-lg font-semibold">Warranty Protection</h4>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={shipping}
              alt="Free Shipping"
              className="w-14 h-14 mb-3"
            />
            <h4 className="text-lg font-semibold">Free Shipping</h4>
            <p className="text-sm text-gray-600">Order over $150</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={c_support}
              alt="24/7 Support"
              className="w-14 h-14 mb-3"
            />
            <h4 className="text-lg font-semibold">24 / 7 Support</h4>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
