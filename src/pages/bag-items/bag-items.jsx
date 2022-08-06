import React, { Component } from "react";
import Bag from "../../components/bag/bag";
import SideBar from "../../components/side-bar/side-bar";

import "./bag.scss";

export default class BagItems extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>
        <div className="main-wrapper">Bu yerda products keladi</div>
        <Bag />
        <div className="right-sidebar">Bu yerda bag companenta keladi</div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
