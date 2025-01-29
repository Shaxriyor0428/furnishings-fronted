import { IProduct } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useToggleWishlistMutation } from "../../redux/api/wishlist-api";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { memo, useState } from "react";
import { useCheckTokenQuery } from "@/redux/api/customer-api";

const Heart = ({ product }: { product: IProduct }) => {
  const [toggleWishlist] = useToggleWishlistMutation();
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const token = useSelector((state: RootState) => state.token.access_token);
  const { data } = useCheckTokenQuery(null, { skip: Boolean(!token) });
  const initialState = {
    id: 0,
    state: product.is_liked ?? false,
    clicked: false,
  };
  const [currentLiked, setCurrentLiked] = useState<{
    id: number;
    state: boolean;
    clicked: boolean;
  }>(initialState);

  const handleLike = () => {
    setCurrentLiked({
      id: product.id,
      state: !currentLiked.state,
      clicked: true,
    });
    if (token) {
      toggleWishlist({
        productId: product.id,
        customerId: Number(data?.customer?.id),
      });
    } else {
      dispatch(toggleLike(product));
    }
  };

  const heartState = currentLiked.clicked
    ? currentLiked.state && currentLiked.id === product.id
    : product?.is_liked;

  return (
    <button
      onClick={handleLike}
      className="hover:bg-slate-200 shadow-md dark:text-black absolute top-1 md:top-2 md:right-[-40px] right-2 duration-300 group-hover:right-2 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[20px]"
    >
      {token ? (
        heartState ? (
          <IoMdHeart className="text-red-500" />
        ) : (
          <IoMdHeartEmpty />
        )
      ) : wishlist?.some((item) => item.id === product.id) ? (
        <IoMdHeart className="text-red-500" />
      ) : (
        <IoMdHeartEmpty />
      )}
    </button>
  );
};

export default memo(Heart);
