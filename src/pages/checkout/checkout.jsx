import React, { Component } from "react";
import Bag from "../../components/bag/bag";
import Button from "../../components/button/button";
import SideBar from "../../components/side-bar/side-bar";
import products from "../../products";
import "./checkout.scss";

class Checkout extends Component {
  render() {
    const { onLogOut, onPageChange, user } = this.props;
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar onLogOut={onLogOut} onPageChange={onPageChange} />
        </div>
        <div className="main-wrapper">
          <button className="backBtn" onClick={() => onPageChange("dashboard")}>
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
              {products.map(({ price, name, id, imgURL }, idx) => (
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
                    <div className="stars">
                      &#11088; &#11088; &#11088; &#11088; &#11088;
                    </div>

                    <div className="price">
                      <span>$ {price} x 1</span>
                      <div className="counts">
                        <button className="btn-red">-</button>
                        <span>1</span>
                        <button className="btn-success">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <Bag />
        </div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
export default Checkout;
