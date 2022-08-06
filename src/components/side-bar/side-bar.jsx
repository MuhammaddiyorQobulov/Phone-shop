import React, { Component } from "react";
import { bagHandle, logout, storefront } from "../../assets/icons";

import "./side-bar.scss";
export default class SideBar extends Component {
  render() {
    const { onLogOut, onPageChange } = this.props;
    return (
      <div className="side-bar">
        <span className="store-icon" onClick={() => onPageChange("dashboard")}>
          {storefront}
        </span>
        <span
          className="bagHandle-icon"
          onClick={() => onPageChange("bag-items")}
        >
          {bagHandle}
        </span>
        <span className="logout-icon" onClick={onLogOut}>
          {logout}
        </span>
      </div>
    );
  }
}
