import React from "react";
import { useCartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

function Cart() {
  const { totalPrice, productosCarrito, cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <div className="Cart">
      {productosCarrito()}

      <p>total: {totalPrice()}</p>
    </div>
  );
}

export default Cart;
