import { Component } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import BagItems from "./pages/bag-items/bag-items";
import products from "./products";
class App extends Component {
  state = {
    products: products,
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <BagItems />
        <Login />
        <Dashboard />
      </div>
    );
  }
}

export default App;
