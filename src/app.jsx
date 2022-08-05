import { Component } from "react";
import Login from "./pages/login/login";
import products from "./products";

class App extends Component {
  state = {};

  render() {
    console.log("products = ", products);
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
