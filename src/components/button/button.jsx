
import React, { Component } from "react";
import "./button.scss"

class Button extends Component {
    render() {
        const { title = "btn-title", logo } = this.props;
        return (
            <button className="_btn">{logo} {title &&  title }</button>
        );
    }
}

export default Button;