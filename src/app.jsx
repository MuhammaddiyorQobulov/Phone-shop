import { Component } from "react";
import BagItems from "./pages/bag-items/bag-items";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import products from "./products";


class App extends Component {
  state = {
    products: [...products],
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Dashboard />
        <Login/>
        <BagItems/>
      </div>
    );
  }
}

export default App;
