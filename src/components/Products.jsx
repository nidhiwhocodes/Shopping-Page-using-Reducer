
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const products = [
  { id: 1, title: "Colors", price: 100 },
  { id: 2, title: "Black and White Colors", price: 50 },
  { id: 3, title: "Yellow and Black Colors", price: 70 },
];

function Products() {
  const dispatch = useDispatch();

  return (
    <section className="mt-8">
      <h2 className="mb-6 text-2xl font-bold">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h3 className="text-lg font-semibold">
              {product.title}
            </h3>

            <p className="my-3 text-gray-700">
              ₹{product.price}
            </p>

            <button
              onClick={() =>
                dispatch(addToCart(product))
              }
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

