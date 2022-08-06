import { Component } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import BagItems from "./pages/bag-items/bag-items";
import View from "./pages/view/view";
import "./base.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        {/* <BagItems />
        <Login />
        <Dashboard /> */}
        <View/>
      </div>
    );
  }
}

export default App;
