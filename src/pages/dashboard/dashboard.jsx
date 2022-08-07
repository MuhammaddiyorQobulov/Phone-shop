import React, { Component } from "react";
import SideBar from "../../components/side-bar/side-bar";
import "./dashboard.scss";
import Products from "./products/products";
import Bag from "../../components/bag/bag";
export default class Dashboard extends Component {
  render() {
    const { onLogOut, onPageChange, addToBag, handleBagProducts, inCrement } =
      this.props;
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar onLogOut={onLogOut} onPageChange={onPageChange} />
        </div>
        <div className="main-wrapper">
          <Products onPageChange={onPageChange} inCrement={inCrement} addToBag={addToBag}/>
        </div>
        <div className="right-sidebar">
          <Bag products={handleBagProducts} onPageChange={onPageChange} />
        </div>
      </div>
    );
  }
}
