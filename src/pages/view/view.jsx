import React, { Component } from "react";
import SideBar from "../../components/side-bar/side-bar";
import products from "../../products";
<<<<<<< HEAD
import { bagAdd } from "../../assets/icons";
=======
>>>>>>> 39c399f5a786e02d8f9f9177354a4c02b13106d0

import "./view.scss";

export default class view extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar />
        </div>
        <div className="main-wrapper">
          <button className="backBtn">&lt; Back</button>
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
        <div className="right-sidebar">Bu yerda bag companenta keladi</div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
