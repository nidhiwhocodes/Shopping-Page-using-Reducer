import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./redux/cartReducer";

function App() {
  const dispatch = useDispatch();

  const isCartVisible = useSelector(
    (state) => state.cart.isVisible
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Shopping App</h1>

        <button
          onClick={() => dispatch(toggleCart())}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          {isCartVisible ? "Hide Cart" : "My Cart"}
        </button>
      </div>

      {isCartVisible && (
        <div className="mt-8 rounded-lg bg-white p-6 shadow">
          <h2 className="text-2xl font-semibold">My Cart</h2>
          <p className="mt-2 text-gray-600">
            Your cart is visible!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;