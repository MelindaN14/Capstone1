import React from "react";
import "./Product.css";
import book from "./images/ACOTAR.jpeg";

function Product({ title, ie, price, rating }) {
  return (
    <div className="product">
      {/* product, title, info, basket */}
      <div className="product__info">
        <p>A{title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>{" "}
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img className="book" src={book} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
