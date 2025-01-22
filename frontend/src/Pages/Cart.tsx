import CartItems from "../Components/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="pt-24 pb-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-lg text-gray-600 mt-4">
            Review your selections, adjust quantities, and proceed to checkout.
          </p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <CartItems />
      </div>

      {/* Next Steps Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Checkout?
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Double-check your cart and proceed when ready.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Product+${index + 1}`}
                alt={`Product ${index + 1}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">
                Product Name {index + 1}
              </h3>
              <p className="text-sm text-gray-600 mt-1">$19.99</p>
              <button className="mt-4 w-full px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
