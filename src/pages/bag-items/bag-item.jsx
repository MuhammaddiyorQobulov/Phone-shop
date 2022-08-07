import React, { Component } from "react";
import { star, starHalf, starOutline } from "./../../assets/icons";
import "./bag-items.scss";

class BagItem extends Component {
  starts(rate) {
    const full = new Array(parseInt(rate)).fill(1);
    const half = (rate % 1) * 2;
    const empty = new Array(parseInt(5 - rate)).fill(1);

    return (
      <div className="stars">
        {full.map((item, idx) => (
          <div className="full" key={idx}>
            {star}
          </div>
        ))}
        {half != 0 && <div className="half">{starHalf}</div>}
        {empty.map((item, idx) => (
          <div className="empty" key={idx}>
            {starOutline}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { product, inCrement } = this.props;
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
              <span className="bag-items__rate">
                {this.starts(product.rate)} {product.rate}/5
              </span>
            </div>
            <div className="bag-items-box__description__price-part">
              <div className="bag-items-box__price-box">
                <span className="bag-items-box__price">${product.price}</span>
                <span>x</span>
                <span className="bag-items-box__goods">
                  {product.countOfProduct}
                </span>
              </div>
              <div className="bag-items-box__total-goods">
                <span
                  className="bag-items-box__dec"
                  onClick={() => inCrement(product.id, -1)}
                >
                  -
                </span>
                <span className="bag-items-box__count">
                  {product.countOfProduct}
                </span>
                <span
                  className="bag-items-box__inc"
                  onClick={() => inCrement(product.id, 1)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BagItem;
