import React, { Component } from 'react'
import {bagHandle, logout, storefront} from "../../assets/icons"

import "./side-bar.scss";
export default class SideBar extends Component {
  render() {
    return (
      <div className='side-bar'>
        <span>{storefront}</span>
        <span>{bagHandle}</span>
        <span className='logout-icon'>{logout}</span>
      </div>
    )
  }
}
