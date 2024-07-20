import React from "react";
import "./Product.css";
import book from "./images/ACOTAR.jpeg";

function Product() {
  return (
    <div className="product">
      {/* product, title, info, basket */}
      <div className="product__info">
        <p>A Court of Thorns and Roses </p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>{" "}
        </p>
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>
      <img className="book" src={book} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
