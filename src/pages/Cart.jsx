import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f3] px-4">
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-[#8f6424]">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything yet.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-[#8f6424] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const subtotal = cart.price * cart.quantity;
  const shipping = 0;
  const total = subtotal + shipping;

  const removeItem = () => {
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f8f6f3] py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#8f6424] mb-10">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Product Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6">

            <div className="flex flex-col sm:flex-row gap-6 items-center">

              <img
                src={cart.image}
                alt={cart.name}
                className="w-40 h-40 object-cover rounded-2xl"
              />

              <div className="flex-1 text-center sm:text-left">

                <h2 className="text-2xl font-semibold mb-2">
                  {cart.name}
                </h2>

                <p className="text-gray-500 mb-2">
                  Premium Skincare Product
                </p>

                <p className="text-lg font-semibold text-[#8f6424]">
                  ${cart.price}
                </p>

                <div className="mt-4 inline-block bg-[#F7F0E4] px-4 py-2 rounded-full">
                  Quantity: {cart.quantity}
                </div>
              </div>
            </div>

            <button
              onClick={removeItem}
              className="mt-6 border border-red-500 text-red-500 px-5 py-2 rounded-xl hover:bg-red-500 hover:text-white transition"
            >
              Remove Item
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">

            <h2 className="text-2xl font-semibold text-[#8f6424] mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold text-[#8f6424]">
                <span>Total</span>
                <span>${total}</span>
              </div>

            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-8 bg-black text-white py-4 rounded-xl hover:opacity-90 transition"
            >
              Proceed To Checkout
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full mt-4 border border-[#8f6424] text-[#8f6424] py-4 rounded-xl hover:bg-[#8f6424] hover:text-white transition"
            >
              Continue Shopping
            </button>

            <div className="mt-6 text-sm text-gray-500 text-center">
              🔒 Secure Checkout <br />
              🚚 Free Shipping Available
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;