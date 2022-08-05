import React, { Component } from "react";
import { bagAdd } from "../../../assets/icons";
class Product extends Component {
  render() {
    const {
      id,
      name,
      model,
      imgURL,
      rate,
      price,
      description,
      countOfProducts,
    } = this.props.product;
    return (
      <div className="product">
        <img src={imgURL} alt="" />
        <h3>{name}</h3>
        <p>{model}</p>
        <div className="price">
          <b>$ {price}</b>
          <button>{bagAdd}</button>
        </div>
        {console.log(this.props.product.name)}
      </div>
    );
  }
}

export default Product;
