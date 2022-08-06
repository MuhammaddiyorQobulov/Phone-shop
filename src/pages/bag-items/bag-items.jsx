import React, { Component } from "react";
<<<<<<< HEAD
import Bag from "../../components/bag/bag";
import SideBar from "../../components/side-bar/side-bar";
=======
import SideBar from "../../components/side-bar/side-bar";
import products from "./../../products";
import BagItem from "./bag-item";
import "./bag-item.scss";
>>>>>>> e7b74427fbb761d5d656a9b41d4996d234ac8242

class BagItems extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>
<<<<<<< HEAD
        <div className="main-wrapper">Bu yerda products keladi</div>
        <Bag />
        <div className="right-sidebar">Bu yerda bag companenta keladi</div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
=======
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
        <div className="right-sidebar">Bu yerda bag companenta keladi</div>
      </div>
>>>>>>> e7b74427fbb761d5d656a9b41d4996d234ac8242
    );
  }
}

export default BagItems;
