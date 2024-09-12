import React from "react";
import "./Product.css";
// import book from "./src/images/ACOTAR.jpeg";
// import image from "./src/images/beats pill.jpg";
export const PRODUCTS = 

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title} </p>
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
      <img className="image" src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
