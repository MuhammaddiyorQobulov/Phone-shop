import { Component } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import BagItems from "./pages/bag-items/bag-items";

class App extends Component {
  state = {};

  render() {
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
