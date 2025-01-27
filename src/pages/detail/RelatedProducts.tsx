// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Products from "../../components/products/Products";
import { IProduct } from "../../types";

const RelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: IProduct[];
}) => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  console.log(relatedProducts);

  return (
    <>
      <Products data={relatedProducts} />
      <div className="container my-10 max-[620px]:my-4 mt-20">
        {visibleProducts < relatedProducts?.length && (
          <div className="text-center mt-6">
            <button
              onClick={showMoreProducts}
              className="px-14 py-2 border border-[#B88E2F] text-[#B88E2F] text-lg"
            >
              Show More
            </button>
          </div>
        )}
      </div>
  );
};

export default RelatedProducts;
