import React from "react";
import "./Product.css";
import ""

function Product() {
  return (
    <div className="product">
      {/* product, title, info, basket */}
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>{" "}
        </p>
        <div className="product__rating">
          <p>*</p>
        </div>
      </div>
      <img src = "ACOTAR.jpeg"> </img>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
