import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="../images/amazon-border.jpg"
          alt=""
        />
        <div>
                  <h2 className="checkout__title">Your shopping Basket</h2>
                  {}
        </div>
          </div>
          {/* basket area */}
      <div className="checkout__right"></div>

      <h1>Test me</h1>
    </div>
  );
}

export default Checkout;
