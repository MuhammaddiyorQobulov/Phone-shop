import React, { Component } from "react";
import SideBar from "../../components/side-bar/side-bar";
import Bag from "../../components/bag/bag";
import products from "../../products";
import { bagAdd } from "../../assets/icons";
import "./view.scss";

export default class View extends Component {
  render() {
    const { onPageChange, onLogOut } = this.props;
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar onLogOut={onLogOut} onPageChange={onPageChange} />
        </div>
        <div className="main-wrapper">
          <button className="backBtn" onClick={()=>onPageChange("dashboard")}>&lt; Back</button>
          <div className="hero">
            <div className="hero-left">
              <ul className="img-list">
                <li className="item">
                  <img src={products[0].imgURL} alt="" />
                </li>
                <li className="item">
                  <img src={products[0].imgURL} alt="" />
                </li>
                <li className="item">
                  <img src={products[0].imgURL} alt="" />
                </li>
              </ul>
              <div className="currentImg">
                <img src={products[0].imgURL} alt="" />
              </div>
            </div>
            <div className="hero-right">
              <h2 className="title">{products[0].name}</h2>
              <p className="model">{products[0].model}</p>
              <div className="rateStar">{products[0].rate}</div>
              <p className="const">$ {products[0].price}</p>
              <p className="info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                asperiores assumenda aliquam, commodi ab necessitatibus.
              </p>
              <button className="addBtn">
                {bagAdd} <p>Add to Bag</p>
              </button>
            </div>
          </div>
          <span className="horizontLine"></span>
          <div className="description">
            <h3>Description</h3>
            <p>{products[0].description}</p>
          </div>
        </div>

        <div className="right-sidebar">
          <Bag />
        </div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
