import React, { Component } from "react";
import products from "../../../products";
import Product from "./product";
import "./products.scss";
class Products extends Component {
  render() {
    return (
      <div className="products-section">
        <h1>Products</h1>
        <div className="products">
          {products.map((product, idx) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
