import React, { Component } from "react";
import { star, starHalf, starOutline } from "./../../assets/icons";
import "./bag-items.scss";

class BagItem extends Component {
  


  render() {
    const { product } = this.props;



    return (
      <div className="bag-item">
        <div className="bag-items-box">
          <div className="bag-items-box__img">
            <img src={product.imgURL} alt="" />
          </div>
          <div className="bag-items-box__description">
            <h1>{product.name}</h1>
            <p>{product.model}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
            <div className="bag-items__starts-vs-rate">
              <span className="bag-items__starts"></span>
              <span className="bag-items__rate">{product.rate}</span>
            </div>
            <div className="bag-items-box__description__price-part">
              <div className="bag-items-box__price-box">
                <span className="bag-items-box__price">${product.price}</span>
                <span>x</span>
                <span className="bag-items-box__goods">0</span>
              </div>
              <div className="bag-items-box__total-goods">
                <span className="bag-items-box__dec">-</span>
                <span className="bag-items-box__count">
                  {product.countOfProduct}
                </span>
                <span className="bag-items-box__inc">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BagItem;
