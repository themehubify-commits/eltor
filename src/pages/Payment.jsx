import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("bkash");

  return (
    <div className="min-h-screen bg-[#f8f6f3] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-5xl text-center text-[#8f6424] tracking-[4px] mb-8">
          PAYMENT
        </h1>

        <h2 className="text-xl font-semibold mb-6">Select Payment Method</h2>

        {/* Payment Methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setMethod("bkash")}
            className={`border rounded-xl p-4 font-medium transition cursor-pointer ${
              method === "bkash"
                ? "border-pink-600 bg-pink-50"
                : "border-gray-300"
            }`}
          >
            bKash
          </button>

          <button
            onClick={() => setMethod("nagad")}
            className={`border rounded-xl p-4 font-medium transition cursor-pointer ${
              method === "nagad"
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300"
            }`}
          >
            Nagad
          </button>

          <button
            onClick={() => setMethod("rocket")}
            className={`border rounded-xl p-4 font-medium transition cursor-pointer ${
              method === "rocket"
                ? "border-purple-600 bg-purple-50"
                : "border-gray-300"
            }`}
          >
            Rocket
          </button>

          <button
            onClick={() => setMethod("upay")}
            className={`border rounded-xl p-4 font-medium transition cursor-pointer ${
              method === "upay"
                ? "border-green-600 bg-green-50"
                : "border-gray-300"
            }`}
          >
            Upay
          </button>
        </div>

        {/* Payment Info */}
        <div className="border rounded-xl p-5 bg-gray-50">
          <h3 className="font-semibold text-lg mb-4">
            {method === "bkash" && "Pay with bKash"}
            {method === "nagad" && "Pay with Nagad"}
            {method === "rocket" && "Pay with Rocket"}
            {method === "upay" && "Pay with Upay"}
          </h3>

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border p-3 rounded-lg mb-4 outline-none"
          />

          <input
            type="text"
            placeholder="Transaction ID"
            className="w-full border p-3 rounded-lg outline-none"
          />
        </div>

        {/* Security Message */}
        <div className="mt-6 bg-[#f9f5ef] border border-[#e7d7bb] p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            🔒 Your payment information is secure and encrypted.
          </p>
        </div>

        {/* Complete Payment Button */}
        <button
          onClick={() => navigate("/success")}
          className="w-full mt-6 bg-[#8f6424] text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;
