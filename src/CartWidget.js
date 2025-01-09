import React from "react";
import "./CartWidget.css";

function CartWidget() {
  const cartCount = 5;
  return (
    <div className="cart-widget">
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" // Ícono del carrito
        alt="Carrito"
        className="cart-icon"
      />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
}

export default CartWidget;
