import ProductDetail from "./ProductDetail";
import { useGetProductsQuery } from "@/redux/api/product-api";
import RelatedProducts from "./RelatedProducts";

const MainDetail = () => {
  const { data } = useGetProductsQuery({ limit: 10000 });
  return (
    <>
      <ProductDetail />
      {data && <RelatedProducts data={data} />}
    </>
  );
};

export default MainDetail;
