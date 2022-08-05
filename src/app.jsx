import { Component } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Products from "./pages/dashboard/products/products";
class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Products />
        <Login />
        <Dashboard />
      </div>
    );
  }
}

export default App;
