import React, { Component } from "react";
import "./button.scss";

class Button extends Component {
  render() {
    const { title, icon } = this.props;
    return (
      <button className="_btn">
        <span>{icon}</span>
        <span>{title && title}</span>
      </button>
    );
  }
}

export default Button;
