import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    updateCartQuantity,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Your Cart</h1>

      {/* Empty Cart State */}
      {totalAmount === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-600 mb-6">Your cart is currently empty.</p>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Cart Header */}
          <div className="hidden lg:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-10 py-5 text-gray-700 text-sm font-semibold border-b border-gray-300">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {/* Cart Items */}
          {all_product.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className="py-5 border-b border-gray-300">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <p className="text-sm text-gray-800 font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600 font-medium">
                      ${item.new_price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateCartQuantity(item.id, cartItems[item.id] - 1)}
                        className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-300 rounded-l-md hover:bg-gray-200 transition"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 bg-gray-50 text-gray-800 border border-gray-300">
                        {cartItems[item.id]}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, cartItems[item.id] + 1)}
                        className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-300 rounded-r-md hover:bg-gray-200 transition"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-800 font-semibold">
                      ${(item.new_price * cartItems[item.id]).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      aria-label="Remove item"
                    >
                      <img
                        src="https://img.icons8.com/?size=60&id=xiQbirZb0aZs&format=png"
                        alt="remove-icon"
                        className="w-5"
                      />
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* Cart Total and Promo Code */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-12">
            {/* Cart Total */}
            <div className="flex flex-col w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Total</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Subtotal</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Shipping Fee</p>
                  <p className="text-green-500 font-medium">Free</p>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-gray-800 text-lg font-semibold">
                  <p>Total</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
              </div>
              <button className="mt-6 w-full py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition">
                Proceed to Checkout
              </button>
            </div>

            {/* Promo Code */}
            <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Promo Code</h2>
              <p className="text-sm text-gray-600 mb-3">
                Enter your promo code below to get a discount.
              </p>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-grow px-4 py-2 text-sm text-gray-800 focus:outline-none"
                />
                <button className="px-4 py-2 bg-gray-800 text-white font-medium hover:bg-gray-700 transition">
                  Apply
                </button>
              </div>
              {/* Success or Failure Message */}
              <p className="text-sm text-green-500 mt-2 hidden">Promo code applied!</p>
              <p className="text-sm text-red-500 mt-2 hidden">Invalid promo code.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
