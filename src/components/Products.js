import React from "react";

import { products } from "../database/Products";
import Product from "./Product";
const Products = () => {
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
