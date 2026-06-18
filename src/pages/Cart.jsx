import React from "react";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>

      <img
        src={cart.image}
        alt=""
        className="w-32"
      />

      <h2>{cart.name}</h2>

      <p>Price: ${cart.price}</p>

      <p>Quantity: {cart.quantity}</p>

      <p>Total: ${cart.price * cart.quantity}</p>
    </div>
  );
}

export default Cart;