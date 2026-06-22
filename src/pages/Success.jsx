import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f6f3] flex items-center justify-center px-4">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-lg p-8 text-center">

        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <span className="text-5xl">✓</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-2">
          Thank you for your purchase.
        </p>

        <p className="text-gray-500 text-sm mb-8">
          Your order has been placed successfully and is being processed.
        </p>

        {/* Order Status Box */}
        <div className="bg-[#faf7f2] border border-[#e7d7bb] rounded-xl p-4 mb-8">
          <p className="text-[#8f6424] font-medium">
            Order Status: Confirmed ✅
          </p>

          <p className="text-sm text-gray-500 mt-2">
            You will receive an order confirmation email shortly.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3">

          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-[#8f6424] text-white py-3 rounded-xl hover:opacity-90 transition cursor-pointer"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="flex-1 border border-[#8f6424] text-[#8f6424] py-3 rounded-xl hover:bg-[#8f6424] hover:text-white transition cursor-pointer"
          >
            Back To Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default Success;