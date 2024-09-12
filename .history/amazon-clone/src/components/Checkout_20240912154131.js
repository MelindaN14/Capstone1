import React from "react";
import "./Checkout.css";
import checkout__ad from "../images/amazon-border.jpg";
// import "./Subtotal";

function Checkout() { const stripe = require("stripe")("sk_test_...");

stripe.customers
  .create({
    email: "customer@example.com",
  })
  .then((customer) => console.log(customer.id))
  .catch((error) => console.error(error));
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={checkout__ad}
          alt="amazon"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* {BasketItem} */}
          {/* {BasketItem} */}
          {/* {BasketItem} */}
          {/* {BasketItem} */}
          {/* {BasketItem} */}
          {/* {BasketItem} */}
        </div>
      </div>
      {/* basket area */}
      <div className="checkout__right">
        {/* <Subtotal/> */}
      </div>
      <h2> The Subtotal will go here</h2>
    </div>
    <button on click={makePayment}
        className={`text-white`}
    </div>
  );
}

export default Checkout;
