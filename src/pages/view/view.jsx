import React, { Component } from "react";
import SideBar from "../../components/side-bar/side-bar";
import products from "../../products";

import "./view.scss";

export default class view extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>
        <div className="main-wrapper">Bu yerda products keladi</div>
        <div className="right-sidebar">Bu yerda bag companenta keladi</div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
