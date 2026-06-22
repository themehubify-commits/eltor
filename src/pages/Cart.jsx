import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const storedCart = JSON.parse(localStorage.getItem("cart"));

  const [quantity, setQuantity] = useState(
    storedCart?.quantity || 1
  );

  if (!storedCart) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Your Cart Is Empty</h1>
      </div>
    );
  }

  const total = storedCart.price * quantity;

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <div className="bg-[#fafafa] min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-8">
          Shopping Cart
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">

          <div className="flex flex-col md:flex-row gap-6 items-center">

            <img
              src={storedCart.image}
              alt={storedCart.name}
              className="w-40 h-40 object-cover rounded-xl"
            />

            <div className="flex-1 text-center md:text-left">

              <h2 className="text-2xl font-semibold">
                {storedCart.name}
              </h2>

              <p className="text-gray-600 mt-2">
                Price: ${storedCart.price}
              </p>

              <div className="flex justify-center md:justify-start items-center gap-3 mt-5">

                <button
                  onClick={decreaseQty}
                  className="w-10 h-10 border rounded-lg text-xl"
                >
                  -
                </button>

                <span className="text-lg font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQty}
                  className="w-10 h-10 border rounded-lg text-xl"
                >
                  +
                </button>

              </div>

            </div>
          </div>

          <div className="border-t mt-8 pt-6">

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-black text-white py-3 rounded-xl mt-6 hover:opacity-90 transition"
            >
              Proceed To Checkout
            </button>

            <button
              onClick={removeCart}
              className="w-full border border-red-500 text-red-500 py-3 rounded-xl mt-3 hover:bg-red-500 hover:text-white transition"
            >
              Remove Item
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;