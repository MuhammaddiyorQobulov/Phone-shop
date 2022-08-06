import React, { Component } from "react";
import Bag from "../../components/bag/bag";
import SideBar from "../../components/side-bar/side-bar";
import products from "./../../products";
import BagItem from "./bag-item";
import "./bag-item.scss";

class BagItems extends Component {
  render() {
    const { onPageChange, onLogOut } = this.props;
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar onLogOut={onLogOut} onPageChange={onPageChange} />
        </div>
        <div className="main-wrapper">
          <div className="bag-items ">
            <div className="bag-items-boxes">
              <h1 className="bag-items__title">Check your Bag Items</h1>
              {products.map((product) => (
                <BagItem
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <Bag btnTitle="Checkout" onPageChange={onPageChange} />
        </div>
      </div>
    );
  }
}

export default BagItems;
