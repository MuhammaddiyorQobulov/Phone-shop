import React, { Component } from "react";

import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import BagItems from "./pages/bag-items/bag-items";
import View from "./pages/view/view";
import products from "./products";
import Checkout from "./pages/checkout/checkout";
const USER_KEY = "user";
const PAGE_KEY = "page";
const REDIRECT_PAGE = "login";
class App extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem(USER_KEY)); // get user
    const page = JSON.parse(localStorage.getItem(PAGE_KEY)); // get page
    this.state = {
      page: user ? page : REDIRECT_PAGE,
      user,
      products: products,
    };
  }

  handleLogOut = () => {
    localStorage.removeItem(USER_KEY); // delete user
    this.setState({ user: null, page: REDIRECT_PAGE });
  };

  handleLogIn = () => {
    localStorage.setItem(USER_KEY, true); // save user
    localStorage.setItem(PAGE_KEY, JSON.stringify("dashboard")); // save page
    this.setState({ user: true, page: "dashboard" });
  };

  handlePageChange = (newPage) => {
    localStorage.setItem(PAGE_KEY, JSON.stringify(newPage)); // save page
    this.setState({ page: newPage });
    console.log("444555");
  };

  getPage = () => {
    const { products } = this.state;
    const defaultProps = {
      onPageChange: this.handlePageChange,
      onLogOut: this.handleLogOut,
    };

    switch (this.state.page) {
      case "login":
        return <Login onLogin={this.handleLogIn} />;
      case "dashboard":
        return <Dashboard {...defaultProps} products={products} />;
      case "bag-items":
        return <BagItems {...defaultProps} />;
      case "view":
        return <View {...defaultProps} />;
      case "checkout":
        return <Checkout {...defaultProps} />;
      default:
        return <Login onLogin={this.handleLogIn} />;
    }
  };

  render() {
    return <div className="wrapper">{this.getPage()}</div>;
  }
}

export default App;
