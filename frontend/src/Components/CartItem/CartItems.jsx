import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  console.log(getTotalCartAmount());

  return (
    <div className="mx-24 my-24 lg:mx-12 md:mx-8 sm:mx-4">
      {/* Cart header */}
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-20 py-5 text-gray-700 text-lg font-semibold md:grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr] md:gap-8 md:py-4 md:text-base sm:hidden">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quality</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-gray-200 border-0" />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-20 py-5 text-gray-600 text-base font-medium md:grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr] md:gap-8 md:py-4">
                <img
                  src={e.image}
                  alt="product-img"
                  className="h-16 md:h-12"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-16 h-12 border-2 border-gray-300 bg-white">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src="https://img.icons8.com/?size=60&id=xiQbirZb0aZs&format=png"
                  alt="remove"
                  className="w-6 mx-4 cursor-pointer"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr className="h-[3px] bg-gray-200 border-0" />
            </div>
          );
        }
        return null;
      })}

      {/* Cart total and promo section */}
      <div className="flex flex-col lg:flex-row lg:justify-between mt-24">
        {/* Cart total */}
        <div className="flex flex-col gap-8 lg:mr-48">
          <h1 className="text-2xl font-bold">Cart Total</h1>
          <div>
            <div className="flex justify-between py-4">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-[3px] bg-gray-200 border-0" />
            <div className="flex justify-between py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="h-[3px] bg-gray-200 border-0" />
            <div className="flex justify-between py-4">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="w-64 h-14 bg-red-500 text-white text-lg font-semibold">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="flex flex-col lg:w-96 mt-12 lg:mt-0">
          <p className="text-lg font-medium">If you have a promo code, enter it here:</p>
          <div className="flex bg-gray-200 mt-4 h-14 px-4">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-grow bg-transparent outline-none text-lg"
            />
            <button className="w-32 bg-black text-white font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
