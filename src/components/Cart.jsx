
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartReducer";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">My Cart</h2>
        <p className="mt-4 text-gray-500">
          Your cart is empty.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        My Cart
      </h2>

      <div className="space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-center justify-between gap-4 border-b pb-5"
          >
            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600">
                ₹{item.price} × {item.quantity}
              </p>

              <p className="font-medium">
                Subtotal: ₹{item.price * item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
                className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                aria-label={`Decrease ${item.title} quantity`}
              >
                −
              </button>

              <span className="font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
                className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                aria-label={`Increase ${item.title} quantity`}
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        Total: ₹{totalAmount}
      </h3>
    </section>
  );
}

export default Cart;

