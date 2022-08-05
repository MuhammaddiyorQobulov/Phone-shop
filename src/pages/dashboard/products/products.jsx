import React, { Component } from "react";
import products from "../../../products";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div className="product">
        {products.map((product, idx) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default Products;
