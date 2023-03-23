import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const Product = ({ product }) => {
  const { id, title, price } = product;
  console.log(product);
  const { totalPrice, products, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart =
      products && products.find((product) => product.title === title);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, title]);

  console.log(products);

  const handleClick = () => {
    const product = { id, title, price };
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <article className="product">
      <h3>{title}</h3>
      <p>{price}$</p>
      <button onClick={handleClick}>{isInCart ? "-" : "+"}</button>
    </article>
  );
};

export default Product;
