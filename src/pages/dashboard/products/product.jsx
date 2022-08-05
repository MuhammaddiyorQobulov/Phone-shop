import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product">{console.log(this.props.product.name)}</div>
    );
  }
}

export default Product;
