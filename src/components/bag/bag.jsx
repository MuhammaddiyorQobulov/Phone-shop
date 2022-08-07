import { Component } from "react";
import "./bag.scss";

import { bagHandle } from "../../assets/icons";
class Bag extends Component {
  render() {
    const {
      onPageChange,
      btnTitle = "View Bag",
      products,
      isEmpty = "Empty",
    } = this.props;
    return (
      <>
        <div className="bag">
          <h1 className="bagTitle">Bag</h1>
          {products.length == 0 && (
            <h2
              style={{
                textAlign: "center",
                color: "#e6d117",
              }}
            >
              {isEmpty}
            </h2>
          )}
          <div className="cards">
            {products.map((product, idx) => (
              <div className="card" key={product.id}>
                <img src={product.imgURL} alt="" />
              </div>
            ))}
          </div>

          <h1 className="money">Bag Total: 24543.32$</h1>
          <button
            onClick={() =>
              onPageChange(btnTitle === "View Bag" ? "bag-items" : "checkout")
            }
            className="btnBag"
          >
            {bagHandle} {btnTitle}
          </button>
        </div>
      </>
    );
  }
}

export default Bag;
