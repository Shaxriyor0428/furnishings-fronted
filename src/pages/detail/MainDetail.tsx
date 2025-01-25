import Header from "@/components/header/Header"
import ProductDetail from "./ProductDetail"
import Footer from "@/components/footer/Footer"
import { useGetProductsQuery } from "@/redux/api/product-api"
import RelatedProducts from "./RelatedProducts"

const MainDetail = () => {
    const { data } = useGetProductsQuery({ limit: 10000 });
  return (
    <>
    <Header/>
    <ProductDetail/>
    {data && <RelatedProducts data={data} />}
    <Footer/>
    
    </>
  )
}

export default MainDetail