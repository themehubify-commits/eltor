import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart"));

  const total = cart ? cart.price * cart.quantity : 0;

  const [method, setMethod] = useState("bkash");
  const [mobile, setMobile] = useState("");
  const [trxId, setTrxId] = useState("");

  const merchantNumbers = {
    bkash: "01964-597170",
    nagad: "01964-597170",
    rocket: "01964-597170",
    upay: "01964-597170",
  };

  const handlePayment = () => {
    if (!mobile.trim()) {
      alert("Please enter your mobile number");
      return;
    }

    if (!trxId.trim()) {
      alert("Please enter transaction ID");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-[#f8f6f3] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-5xl text-center text-[#8f6424] tracking-[4px] mb-10">
            PAYMENT
          </h1>

          <h2 className="text-xl font-semibold mb-6">Select Payment Method</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <button
              onClick={() => setMethod("bkash")}
              className={`border-2 rounded-2xl p-5 transition-all ${
                method === "bkash"
                  ? "border-pink-500 bg-pink-50 scale-105"
                  : "border-gray-200 hover:border-pink-400"
              }`}
            >
              <h3 className="font-bold text-pink-600 text-lg">bKash</h3>
            </button>

            <button
              onClick={() => setMethod("nagad")}
              className={`border-2 rounded-2xl p-5 transition-all ${
                method === "nagad"
                  ? "border-orange-500 bg-orange-50 scale-105"
                  : "border-gray-200 hover:border-orange-400"
              }`}
            >
              <h3 className="font-bold text-orange-600 text-lg">Nagad</h3>
            </button>

            <button
              onClick={() => setMethod("rocket")}
              className={`border-2 rounded-2xl p-5 transition-all ${
                method === "rocket"
                  ? "border-purple-500 bg-purple-50 scale-105"
                  : "border-gray-200 hover:border-purple-400"
              }`}
            >
              <h3 className="font-bold text-purple-600 text-lg">Rocket</h3>
            </button>

            <button
              onClick={() => setMethod("upay")}
              className={`border-2 rounded-2xl p-5 transition-all ${
                method === "upay"
                  ? "border-green-500 bg-green-50 scale-105"
                  : "border-gray-200 hover:border-green-400"
              }`}
            >
              <h3 className="font-bold text-green-600 text-lg">Upay</h3>
            </button>
          </div>

          {/* Merchant Number */}
          <div className="bg-[#F7F0E4] rounded-2xl p-5 mb-6">
            <p className="text-sm text-gray-600 mb-2">Send Money To</p>

            <h2 className="text-2xl font-bold text-[#8f6424]">
              {merchantNumbers[method]}
            </h2>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
            <h3 className="font-semibold mb-3">Payment Instructions</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>1. Open your {method} app.</li>

              <li>2. Send money to the merchant number above.</li>

              <li>3. Copy the Transaction ID.</li>

              <li>4. Paste the Transaction ID below.</li>
            </ul>
          </div>

          {/* Inputs */}
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#8f6424]"
            />

            <input
              type="text"
              placeholder="Transaction ID"
              value={trxId}
              onChange={(e) => setTrxId(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#8f6424]"
            />
          </div>

          {/* Security */}
          <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4">
            <p className="text-sm text-green-700">
              🔒 Secure payment with SSL encryption.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handlePayment}
            className="w-full mt-8 bg-[#8f6424] text-white py-4 rounded-xl hover:opacity-90 transition font-medium text-lg"
          >
            Complete Payment
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">
          <h2 className="text-2xl font-semibold text-[#8f6424] mb-6">
            Order Summary
          </h2>

          {cart && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={cart.image}
                  alt={cart.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                <div>
                  <h3 className="font-semibold">{cart.name}</h3>

                  <p className="text-gray-500">Qty: {cart.quantity}</p>

                  <p className="text-gray-500">${cart.price}</p>
                </div>
              </div>

              <hr className="mb-5" />

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>0.99</span>
              </div>

              <div className="flex justify-between font-bold text-xl text-[#8f6424]">
                <span>Total</span>
                <span>${0.99 + total}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
