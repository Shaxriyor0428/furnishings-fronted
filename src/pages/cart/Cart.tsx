import { RootState } from "@/redux";
import {
  decrementAmountCart,
  ICartProduct,
  incrementAmountCart,
  deleteCart,
} from "@/redux/features/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * product.amount,
    0
  );

  return (
    <div className="container mx-auto p-4 sm:p-6 flex flex-col md:flex-row gap-6 sm:gap-8 dark:bg-zinc-800">
      <div className="w-full md:w-2/3">
        <div className="bg-[#F9F1E7] dark:bg-zinc-800 p-3 sm:p-4 rounded-t-lg flex justify-between font-semibold text-sm sm:text-base">
          <p className="w-1/4 text-center">Product</p>
          <p className="w-1/4 text-center">Price</p>
          <p className="w-1/4 text-center">Quantity</p>
          <p className="w-1/4 text-center">Subtotal</p>
        </div>

        <div className="bg-white dark:bg-zinc-700 p-3 sm:p-4 rounded-b-lg">
          {cart.length > 0 ? (
            cart.map((product: ICartProduct) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b py-3 sm:py-4"
              >
                <div className="w-1/4 flex items-center gap-5 sm:gap-6">
                  <img
                    src={
                      import.meta.env.VITE_BASE_IMAGE_URL + product.images[0]
                    }
                    alt={product.name}
                    className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-lg"
                  />
                  <p className="font-semibold text-xs sm:text-base text-black dark:text-white">
                    {product.name}
                  </p>
                </div>

                <p className="w-1/4 text-center text-xs sm:text-base text-black dark:text-white">
                  Rs.{product.price.toFixed(2)}
                </p>

                <div className="w-1/4 flex items-center justify-center gap-2 sm:gap-3">
                  <button
                    disabled={product.amount <= 1}
                    onClick={() => dispatch(decrementAmountCart(product.id))}
                    className="bg-gray-300 px-1 sm:px-2 py-1 sm:py-2 rounded-md disabled:opacity-50 hover:bg-gray-400 transition"
                  >
                    -
                  </button>
                  <span className="text-sm sm:text-lg font-semibold w-6 sm:w-8 text-center">
                    {product.amount}
                  </span>
                  <button
                    disabled={product.stock <= product.amount}
                    onClick={() => dispatch(incrementAmountCart(product.id))}
                    className="bg-gray-300 px-1 sm:px-2 py-1 sm:py-2 rounded-md disabled:opacity-50 hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                </div>

                <p className="w-1/4 text-center font-semibold text-xs sm:text-base text-black dark:text-white">
                  Rs.{(product.price * product.amount).toFixed(2)}
                </p>

                <button
                  onClick={() => dispatch(deleteCart(product.id))}
                  className="bg-[#B88E2F] text-white p-1 sm:p-2 rounded-md hover:bg-[#a07424] transition"
                >
                  <IoTrashOutline size={18} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-xs sm:text-lg text-center py-3 sm:py-4 dark:text-white">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-[#F9F1E7] dark:bg-zinc-800 p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10 text-center text-black dark:text-white">
          Cart Totals
        </h3>
        <div className="flex justify-between mb-4 sm:mb-6">
          <p className="text-sm sm:text-lg font-bold text-black dark:text-white">Subtotal:</p>
          <p className="text-xs sm:text-lg text-[#9F9F9F] dark:text-[#B88E2F]">
            Rs.{subtotal.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between mb-4 sm:mb-6">
          <p className="text-sm sm:text-lg font-bold text-black dark:text-white">Total:</p>
          <p className="text-xs sm:text-lg text-[#B88E2F] dark:text-[#FFD700]">
            Rs.{subtotal.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center pt-6 sm:pt-9">
          <button className="w-full max-w-xs border border-black text-black py-2 sm:py-3 px-6 sm:px-10 rounded-md text-sm sm:text-lg font-semibold transition hover:bg-[#B88E2F] dark:bg-[#B88E2F] dark:text-white">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
