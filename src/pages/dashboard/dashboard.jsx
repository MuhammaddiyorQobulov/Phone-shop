import React, { Component } from "react";
import SideBar from "../../components/side-bar/side-bar";
import "./dashboard.scss";
import Products from "./products/products";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>
        <div className="main-wrapper">
          <Products />
        </div>
        <div className="right-sidebar">Bu yerda bag companenta keladi</div>
      </div>
    );
  }
}
