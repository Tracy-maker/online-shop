import CartItems from "../Components/CartItem/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Your Shopping Cart</h1>
          <p className="text-lg text-gray-100">
            Review your selections, adjust quantities, and proceed to checkout.
          </p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <CartItems />
      </div>

      {/* Next Steps Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 bg-white shadow rounded-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800">You&apos;re Almost Done!</h2>
            <p className="text-base text-gray-600 mt-2">
              Ensure your cart is perfect before proceeding to checkout.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/home"
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Product+${index + 1}`}
                alt={`Product ${index + 1}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Product Name {index + 1}
              </h3>
              <p className="text-sm text-gray-600 mt-2">$19.99</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
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
