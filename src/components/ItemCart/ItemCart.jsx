import React from "react";
import { useCartContext } from "../../context/CartContext";

//Style
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="ItemCart">
      <img src={product.images} alt="producto" />
      <div>
        <h5>{product.name}</h5>
        <p>cantidad: {product.quantity}</p>
        <p>precio u.:{product.price}</p>
        <p>subtotal: {product.quantity * product.price}</p>
        <button onClick={() => removeProduct()}></button>
      </div>
    </div>
  );
};

export default ItemCart;
