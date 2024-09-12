import React, { createContext } from "react";

export const ShopContext = createContext(null);

export const shopContextProvider = (props) =>
{
    const [cartItems, setCartItmes]
    return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};
