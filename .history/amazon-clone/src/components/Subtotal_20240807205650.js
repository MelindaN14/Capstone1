import React from "react";

function Subtotal() {
    return <div className="subtotal">
        CurrencyFormat
        renderText={(value)} => (
        <>
            <p>
                Subtotal ({basket.length} items):
                <strong>{`${value}`}
                </strong>
            </p>
        </>
        )
  </div>;
}

export default Subtotal;
