import React from "react";
import

function Subtotal() {
    return <div className="subtotal">
        CurrencyFormat
        renderText={(value)} => (
        <>
            <p>
                Subtotal ({basket.length} items):
                <strong>{`${value}`}</strong>
            </p>
            <small className="=subtotal__gift" >
            <input type="checkbox"/> This order contains a gifts</small>
        </>
        )}
        decimalScale={2}
        value= {getBasketTotal(basket)}
        displayType = {"text"}
        thousandSeperator={true}
        prefix={}
  </div>;
}

export default Subtotal;
