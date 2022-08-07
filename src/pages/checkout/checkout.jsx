import React, { Component } from "react";
import Bag from "../../components/bag/bag";
import Button from "../../components/button/button";
import SideBar from "../../components/side-bar/side-bar";
import { star, starHalf, starOutline } from "./../../assets/icons";
import "./checkout.scss";

class Checkout extends Component {
  starts(rate) {
    const full = new Array(parseInt(rate)).fill(1);
    const half = (rate % 1) * 2;
    const empty = new Array(parseInt(5 - rate)).fill(1);

    return (
      <div className="stars">
        <div className="full">{full.map(() => star)}</div>
        <div className="half">{half != 0 && starHalf}</div>
        <div className="empty">{empty.map(() => starOutline)}</div>
      </div>
    );
  }
  render() {
    const {
      onLogOut,
      onPageChange,
      user,
      products,
      inCrement,
      handleBagProducts,
    } = this.props;
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar onLogOut={onLogOut} onPageChange={onPageChange} />
        </div>
        <div className="main-wrapper">
          <button className="backBtn" onClick={() => onPageChange("bag-items ")}>
            &lt; Back
          </button>
          <div className="checkout">
            <h1 className="checkout-title">Checkout</h1>
            <div className="user-info">
              <h2>Shipping Address</h2>
              <div className="user">
                <ul>
                  <li>{user[0]}</li>
                  <li>{user[2]}</li>
                  <li>{user[3]}</li>
                  <li>{user[4]}</li>
                </ul>
                <Button title="Change" onLogOut={onLogOut} />
              </div>
            </div>
            <div className="shipping-info">
              <h1>Review Bag</h1>
              {products.map(
                ({ price, name, id, imgURL, countOfProduct, rate }, idx) => (
                  <div key={id} className="review-bag">
                    <div className="img-box">
                      <img src={imgURL} alt="" />
                    </div>
                    <div className="info">
                      <h2>{name}</h2>
                      <h5>White</h5>
                      <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit ut
                        aliquam{" "}
                      </p>

                      <div className="stars-part">
                        {this.starts(rate)} {rate}/5
                      </div>

                      <div className="price">
                        <span>
                          $ {price} x {countOfProduct}
                        </span>
                        <div className="counts">
                          <button
                            className="btn-red"
                            onClick={() => inCrement(id, -1)}
                          >
                            -
                          </button>
                          <span>{countOfProduct}</span>
                          <button
                            className="btn-success"
                            onClick={() => inCrement(id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <Bag products={handleBagProducts} />
        </div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
export default Checkout;
