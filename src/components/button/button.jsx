import React, { Component } from "react";
import "./button.scss";

class Button extends Component {
  render() {
    const { title, icon, onLogOut, disabled } = this.props;
    return (
      <button
        disabled={disabled}
        style={
          disabled
            ? {
                background: "red",
              }
            : {}
        }
        className="_btn"
        onClick={title == "Change" ? onLogOut : null}
      >
        <span>{icon}</span>
        <span>{title && title}</span>
      </button>
    );
  }
}

export default Button;
