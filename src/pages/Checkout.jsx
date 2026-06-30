import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f8f6f3]">
        <h1 className="text-2xl font-bold text-[#8f6424]">
          Your cart is empty
        </h1>
      </div>
    );
  }

  const subtotal = cart.price * cart.quantity;

  const [district, setDistrict] = useState("");
  const [coupon, setCoupon] = useState("");

  const shipping =
    district === "Dhaka"
      ? 60
      : district
      ? 120
      : 0;

  const tax = 0.99;

  const discount =
    coupon.toUpperCase() === "ELTOR10"
      ? subtotal * 0.1
      : 0;

  const total = subtotal + shipping + tax - discount;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  return (
    <div className="min-h-screen bg-[#f8f6f3] py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-5xl text-center text-[#8f6424] tracking-[4px] mb-10">
          CHECKOUT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Customer Information */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6 md:p-8">

            <h2 className="text-2xl font-semibold text-[#8f6424] mb-6">
              Customer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-xl p-3 outline-none focus:border-[#8f6424]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-xl p-3 outline-none focus:border-[#8f6424]"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-3 mt-4 outline-none focus:border-[#8f6424]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-3 mt-4 outline-none focus:border-[#8f6424]"
            />

            <textarea
              rows="4"
              placeholder="Shipping Address"
              className="w-full border rounded-xl p-3 mt-4 resize-none outline-none focus:border-[#8f6424]"
            />

            {/* District */}
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full border rounded-xl p-3 mt-4 outline-none focus:border-[#8f6424]"
            >
              <option value="">Select District</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Barishal">Barishal</option>
            </select>

            {/* Coupon */}
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon Code (Example: ELTOR10)"
              className="w-full border rounded-xl p-3 mt-4 outline-none focus:border-[#8f6424]"
            />

            {/* Order Notes */}
            <textarea
              rows="3"
              placeholder="Order Notes (Optional)"
              className="w-full border rounded-xl p-3 mt-4 resize-none outline-none focus:border-[#8f6424]"
            />

            <button
              onClick={() => navigate("/payment")}
              className="w-full mt-6 bg-[#8f6424] text-white py-4 rounded-xl hover:opacity-90 transition"
            >
              Continue To Payment
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-6 h-fit lg:sticky lg:top-5">

            <h2 className="text-2xl font-semibold text-[#8f6424] mb-6">
              Order Summary
            </h2>

            <div className="flex gap-4 mb-6">
              <img
                src={cart.image}
                alt={cart.name}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>
                <h3 className="font-semibold">
                  {cart.name}
                </h3>

                <p className="text-gray-500">
                  Quantity: {cart.quantity}
                </p>

                <p className="text-[#8f6424] font-medium">
                  ${cart.price}
                </p>
              </div>
            </div>

            <hr className="mb-5" />

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Select District" : `৳${shipping}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span>- ${discount.toFixed(2)}</span>
                </div>
              )}

              <hr />

              <div className="flex justify-between text-xl font-bold text-[#8f6424]">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-700">
                🔒 Secure checkout with encrypted payment processing.
              </p>
            </div>

            <div className="mt-4 bg-[#F7F0E4] rounded-xl p-4">
              <p className="text-sm text-gray-700">
                Estimated Delivery:
              </p>

              <p className="font-semibold text-[#8f6424]">
                {deliveryDate.toDateString()}
              </p>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              Powered by ELTOR Premium Skincare
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;