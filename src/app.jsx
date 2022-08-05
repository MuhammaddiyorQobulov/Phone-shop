import { Component } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Products from "./pages/dashboard/products/products";
import Button from "./components/button/button";
class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Button title="Samandar" logo="++" />
        <Products />
        <Login />
        <Dashboard />
      </div>
    );
  }
}

export default App;
