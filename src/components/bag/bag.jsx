import { Component } from "react";
import "./bag.scss";

import { bagHandle } from "../../assets/icons";
import products from "../../products";
class Bag extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <div className="bag">
          <h1 className="bagTitle">Bag</h1>
          <div className="cards">
            {products.map((product, idx) => (
              <div className="card" key={product.id}>
                <img src={product.imgURL} alt="" />
              </div>
            ))}
          </div>

          <h1 className="money">Bag Total: 24543.32$</h1>
          <button className="btnBag">{bagHandle} View Bag</button>
        </div>
      </>
    );
  }
}

export default Bag;
