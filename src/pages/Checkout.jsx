import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart"));

const total = cart.price * cart.quantity;

  return (
    <div className="min-h-screen bg-[#f8f6f3] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-3xl md:text-5xl text-center text-[#8f6424] tracking-[4px] font-light mb-10">
          CHECKOUT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Customer Information */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-[#8f6424]">
              Customer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:border-[#8f6424]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:border-[#8f6424]"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-3 mt-4 outline-none focus:border-[#8f6424]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg p-3 mt-4 outline-none focus:border-[#8f6424]"
            />

            <textarea
              rows="4"
              placeholder="Shipping Address"
              className="w-full border border-gray-300 rounded-lg p-3 mt-4 resize-none outline-none focus:border-[#8f6424]"
            />

            <button
              onClick={() => navigate("/payment")}
              className="w-full md:w-auto mt-6 bg-[#8f6424] text-white px-8 py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              Continue To Payment
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
            <h2 className="text-2xl font-semibold mb-6 text-[#8f6424]">
              Order Summary
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.99</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${.99+total}</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Secure checkout powered by ELTOR. Your information is protected and encrypted.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;