import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "@/types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import face from "@/assets/images/face.svg";
import linki from "@/assets/images/linki.svg";
import twit from "@/assets/images/twit.svg";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}products/${id}`
        );
        const productData = await response.json();

        if (productData && productData.id) {
          setProduct(productData);
          setSelectedImage(
            `${import.meta.env.VITE_BASE_IMAGE_URL}${productData.images[0]}`
          );
        } else {
          throw new Error("No product data found in response");
        }
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const renderRating = (rating: number): JSX.Element => {
    const fullStars: number = Math.floor(rating);
    const hasHalfStar: boolean = rating % 1 >= 0.5;
    const emptyStars: number = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center text-yellow-500">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-2 gap-8 max-[990px]:grid-cols-1">
        <div className="flex">
          <div className="flex flex-col space-y-4 mr-4 overflow-y-auto h-60 no-scrollbar">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={`${import.meta.env.VITE_BASE_IMAGE_URL}${img}`}
                alt={`Thumbnail ${index + 1}`}
                className="w-40 h-20 object-cover rounded cursor-pointer border-2 border-gray-200 hover:border-blue-500"
                onClick={() =>
                  setSelectedImage(
                    `${import.meta.env.VITE_BASE_IMAGE_URL}${img}`
                  )
                }
              />
            ))}
          </div>

          <div>
            <div className="w-full max-w-lg h-80 overflow-hidden">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-[#9F9F9F]  mt-2">
            RS. {product.price.toLocaleString()}
          </p>
          <div className="mt-4 flex items-center space-x-2">
            {renderRating(product.averageRating)}
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mt-4">
            {product.description}
          </p>
          <div className="mt-4">
            <span className="font-thin">Color </span>
            <div className="flex items-center space-x-2 mt-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-5 mt-6">
            <div className="flex items-center space-x-5 border border-gray-800 dark:border-gray-200 rounded-lg">
              <button
                className="px-4 py-2 rounded  "
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="text-xl ">{quantity}</span>
              <button
                className="px-4 py-2 rounded "
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <button className=" py-30 border-[1px] px-7 py-2 border-black dark:border-gray-200 text-black dark:text-gray-200 rounded-lg">
              Add to Cart
            </button>
            <button className="py-30 border-[1px] px-7 py-2 border-black dark:border-gray-200 text-black dark:text-gray-200 rounded-lg">
              + Compare
            </button>
          </div>
          <div className="flex items-center space-x-4 mt-8"></div>
          <hr className="font-bold" />
          <div className="mt-8">
            <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">
              SKU: {product.sku}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200 mt-1">
              Tags: {product.tags.join(", ")}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200 mt-1">
              Stock: {product.stock}
            </p>

            <p className="flex items-center text-sm text-gray-800 mt-4 space-x-3">
              <span>Share:</span>
              <img
                src={face}
                alt="facebook"
                className="w-4 h-4 cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  )
                }
              />
              <img
                src={linki}
                alt="linkedin"
                className="w-4 h-4 cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  )
                }
              />
              <img
                src={twit}
                alt="twitter"
                className="w-4 h-4 cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  )
                }
              />
            </p>
          </div>
        </div>
        <div className="mt-32 mx-auto max-w-4xl">
          <div className="flex justify-center space-x-14 mb-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === "description"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("additionalInfo")}
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === "additionalInfo"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Additional Information
            </button>
          </div>

          {activeTab === "description" && (
            <div>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {product.description}
              </p>
            </div>
          )}

          {activeTab === "additionalInfo" && (
            <div className="text-sm text-gray-800 dark:text-gray-200">
              <p>Name: {product.name}</p>
              <p>Colors: {product.colors.join(", ")}</p>
              <p>Price: {product.price.toLocaleString()} USD</p>
              <p>Rating: {product.averageRating}</p>
              <p>SKU: {product.sku}</p>
              <p>Tags: {product.tags.join(", ")}</p>
              <p>Stock: {product.stock}</p>
            </div>
          )}
        </div>
        <div className="mt-32 flex justify-center space-x-4">
          {product.images.slice(0, 2).map((img, index) => (
            <img
              key={index}
              src={`${import.meta.env.VITE_BASE_IMAGE_URL}${img}`}
              alt={`Product Image ${index + 1}`}
              className="w-60 h-60 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
