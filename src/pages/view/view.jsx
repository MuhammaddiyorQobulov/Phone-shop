import React, { Component } from "react";
import SideBar from "../../components/side-bar/side-bar";
import Bag from "../../components/bag/bag";
import "./view.scss";

export default class View extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>
        <div className="main-wrapper">Bu yerda products keladi</div>
        <div className="right-sidebar">
          <Bag />
        </div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
