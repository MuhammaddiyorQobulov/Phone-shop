import React, { Component } from "react";

import SideBar from "../../components/side-bar/side-bar";
import products from "./../../products";
import BagItem from "./bag-item";
import "./bag-item.scss";
import Bag from "../../components/bag/bag";

class BagItems extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>

        <div className="main-wrapper">
          <div className="bag-items ">
            <div className="bag-items-boxes">
              <h1 className="bag-items__title">Check your Bag Items</h1>
              {products.map((product) => (
                <BagItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <Bag />
        </div>
      </div>
      // >>>>>>> e7b74427fbb761d5d656a9b41d4996d234ac8242
    );
  }
}

export default BagItems;
