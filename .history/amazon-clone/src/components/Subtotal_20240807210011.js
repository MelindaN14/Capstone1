import React from "react";

function Subtotal() {
    return <div className="subtotal">
        CurrencyFormat
        renderText={(value)} => (
        <>
            <p>
                Subtotal ({basket.length} items):
                <strong>{`${value}`}</strong>
            </p>
            <small className="=subtotal__gift" />
            <input type="checkbox"/> This order contains a gistfs
        </>
        )
  </div>;
}

export default Subtotal;
