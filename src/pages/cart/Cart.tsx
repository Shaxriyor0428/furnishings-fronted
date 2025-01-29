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
        <div className=" dark:bg-zinc-900 p-3 rounded-t-lg">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="font-semibold text-base bg-[#F9F1E7] dark:bg-zinc-800 ">
                <th className="px-4 py-3 text-center">Product</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3 text-center">Quantity</th>
                <th className="px-4 py-3 text-center">Subtotal</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product: ICartProduct) => (
                  <tr
                    key={product.id}
                    className="border-b dark:hover:bg-zinc-900 transition"
                  >
                    <td className="px-3 py-4 flex items-center gap-3">
                      <img
                        src={
                          import.meta.env.VITE_BASE_IMAGE_URL +
                          product.images[0]
                        }
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <p className="font-semibold text-base text-black dark:text-white">
                        {product.name}
                      </p>
                    </td>
                    <td className="px-3 py-4 text-center text-black dark:text-white">
                      Rs.{product.price.toFixed(2)}
                    </td>
                    <td className="px-3 py-4 text-center">
                      <div className="flex items-center gap-2 justify-center">
                        <button
                          disabled={product.amount <= 1}
                          onClick={() =>
                            dispatch(decrementAmountCart(product.id))
                          }
                          className="text-xl px-2 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                          −
                        </button>
                        <span className="text-lg font-semibold w-10 dark:text-black text-center bg-white px-3 py-1 border rounded-md shadow">
                          {product.amount}
                        </span>
                        <button
                          disabled={product.stock <= product.amount}
                          onClick={() =>
                            dispatch(incrementAmountCart(product.id))
                          }
                          className="text-xl px-2 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center text-black dark:text-white">
                      Rs.{(product.price * product.amount).toFixed(2)}
                    </td>
                    <td className="px-3 py-4 text-center">
                      <button
                        onClick={() => dispatch(deleteCart(product.id))}
                        className="bg-[#B88E2F] text-white p-2 rounded-md hover:bg-[#a07424] transition"
                      >
                        <IoTrashOutline size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-gray-500 text-lg text-center py-3 dark:text-white"
                  >
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
