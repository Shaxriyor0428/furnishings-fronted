import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useGetWishlistQuery } from "../../redux/api/wishlist-api";
import Products from "../../components/products/Products";
import { useEffect } from "react";

const Wishlist = () => {
  const id = useSelector((state: RootState) => state.user.value.id);
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const token = useSelector((state: RootState) => state.token.access_token);

  const { data } = useGetWishlistQuery(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Products
        data={token ? data?.data?.products : wishlist}
        title={
          data?.data?.products?.length > 0 || wishlist?.length > 0
            ? "Yours like products"
            : "You have not like products"
        }
      />
    </>
  );
};

export default Wishlist;
