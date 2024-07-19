import React from "react";

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
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Product;
