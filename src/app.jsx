import { Component } from "react";

import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import BagItems from "./pages/bag-items/bag-items";
<<<<<<< HEAD
import View from "./pages/view/view";
import "./base.scss";

=======
import products from "./products";
>>>>>>> 39c399f5a786e02d8f9f9177354a4c02b13106d0
class App extends Component {
  state = {
    products: [...products],
  };

  render() {
    console.log("products = ", products);

    console.log(this.state);
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
