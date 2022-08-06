import React, { Component } from "react";
import Button from "../../../components/button/button";
import { bagAdd } from "../../../assets/icons";
import "./product.scss";
class Product extends Component {
  render() {
    const { onPageChange } = this.props;
    const { name, model, imgURL, price, id } = this.props.product;
    return (
      <div className="product">
        <img src={imgURL} alt="" onClick={() => onPageChange("view", id)} />
        <h3>{name}</h3>
        <p>{model}</p>
        <div className="price">
          <b>$ {price}</b>
          <Button icon={bagAdd} />
        </div>
      </div>
    );
  }
}

export default Product;
