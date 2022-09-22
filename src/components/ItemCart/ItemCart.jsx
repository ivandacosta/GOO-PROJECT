import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="ItemCart">
      <img src={product.images} alt="producto" />
      <div>
        <p>{product.name}</p>
        <p>cantidad: {product.quantity}</p>
        <p>precio u.:{product.price}</p>
        <p>subtotal: {product.quantity * product.price}</p>
        <button onClick={() => removeProduct()}></button>
      </div>
    </div>
  );
};

export default ItemCart;
