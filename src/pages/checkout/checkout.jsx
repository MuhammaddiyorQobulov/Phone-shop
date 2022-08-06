import React, { Component } from "react";
import Bag from "../../components/bag/bag";
import SideBar from "../../components/side-bar/side-bar";
import products from "../../products";
import "./checkout.scss";

class Checkout extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>
        <div className="main-wrapper">
          <div className="checkout">
            <h1 className="checkout-title">Checkout</h1>
            <div className="user-info">
              <h2>Shipping Address</h2>
              <div className="user">
                <ul>
                  <li> John Maker</li>
                  <li> 123 Plae Grond Stret</li>
                  <li> Vermont, California</li>
                  <li>United States of America</li>
                </ul>
                <button>Change</button>
              </div>
            </div>
            <div className="shipping-info">
              {products.map((product, idx) => (
                <div className="review-bag">
                  <div className="img-box">
                    <img src={product.imgURL} alt="" />
                  </div>
                  <div className="info">
                    <h2>{product.name}</h2>
                    <h5>White</h5>
                    <p>
                      Lorem ipsum dolor sit consectetur adipiscing elit ut
                      aliquam{" "}
                    </p>
                    <div className="stars">
                      &#11088; &#11088; &#11088; &#11088; &#11088;
                    </div>

                    <div className="price">
                      <span>$ {product.price} x 1</span>
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
