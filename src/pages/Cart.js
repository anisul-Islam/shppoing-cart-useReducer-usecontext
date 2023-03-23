import React, { useState } from "react";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { products, totalPrice } = useCart();

  const [seletcedProducts, setSelectedProducts] = useState({
    products: [],
    numberOfItems: 1,
  });

  const handleIncrement = (product) => {};

  const handleDecrement = () => {};

  return (
    <div>
      <h2>Cart {products.length} items</h2>
      <p>Total cost: {totalPrice}</p>
      {products &&
        products.map((product) => {
          return (
            <article key={product.id}>
              <h3>{product.title}</h3>
              <button
                onClick={() => {
                  handleIncrement(product);
                }}
              >
                +
              </button>
              <span>{seletcedProducts.numberOfItems}</span>
              <button onClick={handleDecrement}>-</button>
              <p>Price: {product.price}$</p>
            </article>
          );
        })}
    </div>
  );
};

export default Cart;
