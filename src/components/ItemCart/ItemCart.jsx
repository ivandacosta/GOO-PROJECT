import React from "react";
import { useCartContext } from "../../context/CartContext";

//Style
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct, totalPrice } = useCartContext();
  return (
    <div className="ItemCart">
      <img src={product.images} alt="producto" />
      <div>
        <h5>{product.name}</h5>
        <p>cantidad: {product.quantity}</p>
        <p>precio u.:{product.price}</p>
        <p>subtotal: {product.quantity * product.price}</p>
        <p>total: {totalPrice()}</p>
        <button onClick={() => removeProduct()}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
