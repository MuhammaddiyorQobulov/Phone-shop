import React, { Component } from "react";

import "./dashboard.scss";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">bu yerda sidebar keladi</div>
        <div className="main-wrapper">Bu yerda products keladi</div>
        <div className="right-sidebar">Bu yerda bag companenta keladi</div>
      </div>
    );
  }
}
