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
    <div className="container mx-auto p-4 flex  flex-col lg:flex-row gap-6 dark:bg-zinc-900">
      <div className="w-full lg:w-2/3">
        <div className="bg-[#F9F1E7] dark:bg-zinc-800 p-3 rounded-t-lg flex justify-between font-semibold text-base">
          <p className="w-1/4 text-center">Product</p>
          <p className="w-1/4 text-center">Price</p>
          <p className="w-1/4 text-center">Quantity</p>
          <p className="w-1/4 text-center">Subtotal</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-3 rounded-b-lg">
          {cart.length > 0 ? (
            cart.map((product: ICartProduct) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b py-3 gap-3"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={
                      import.meta.env.VITE_BASE_IMAGE_URL + product.images[0]
                    }
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <p className="font-semibold text-base text-black dark:text-white">
                    {product.name}
                  </p>
                </div>

                <p className="text-base text-black dark:text-white">
                  Rs.{product.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    disabled={product.amount <= 1}
                    onClick={() => dispatch(decrementAmountCart(product.id))}
                    className="text-xl px-2 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold w-10 dark:text-black text-center bg-white px-3 py-1 border rounded-md shadow">
                    {product.amount}
                  </span>
                  <button
                    disabled={product.stock <= product.amount}
                    onClick={() => dispatch(incrementAmountCart(product.id))}
                    className="text-xl px-2 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    +
                  </button>
                </div>

                <p className="font-semibold text-base text-black dark:text-white">
                  Rs.{(product.price * product.amount).toFixed(2)}
                </p>

                <button
                  onClick={() => dispatch(deleteCart(product.id))}
                  className="bg-[#B88E2F] text-white p-2 rounded-md hover:bg-[#a07424] transition"
                >
                  <IoTrashOutline size={18} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center py-3 dark:text-white">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>

      <div className="w-full lg:w-1/3 bg-[#F9F1E7] dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-10 text-center text-black dark:text-white">
          Cart Totals
        </h3>
        <div className="flex justify-between mb-6">
          <p className="text-lg font-bold text-black dark:text-white">
            Subtotal:
          </p>
          <p className="text-lg text-[#9F9F9F] dark:text-[#B88E2F]">
            Rs.{subtotal.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-lg font-bold text-black dark:text-white">Total:</p>
          <p className="text-lg text-[#B88E2F] dark:text-[#FFD700]">
            Rs.{subtotal.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center pt-6">
          <button className="w-full max-w-xs border dark:border-white border-black text-black py-2 px-6 rounded-md text-lg font-semibold transition  dark:text-white">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
