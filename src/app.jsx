import { Component } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import products from "./products";

class App extends Component {
  state = {};

  render() {
    console.log("products = ", products);
    return <>
      <Dashboard/>
    </>
  }
}

export default App;
