
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./redux/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();
   const notification = useSelector(
    (state) => state.ui.notification
  );

  const isCartVisible = useSelector(
    (state) => state.cart.isVisible
  );

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6 sm:p-10">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold sm:text-3xl">
          My Shopping App
        </h1>

        <button
          onClick={() => dispatch(toggleCart())}
          className="rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
        >
          🛒 My Cart ({cartCount})
        </button>
      </header>

      {isCartVisible && <Cart />}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Products />
    </main>
  );
}

export default App;

