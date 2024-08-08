import React from "react";

function Subtotal() {
    return <div className="subtotal">
        CurrencyFormat
        renderText={(value)} => (
        <>
            <p>
                Subtotal ({basket.length} items):
            </p>
        </>
        )
  </div>;
}

export default Subtotal;
