import React, { createContext } from "react";

export const ShopContext = createContext(null);

export const shopContextProvider = (props) =>
{
    
    return <ShopContext.Provider>{}</ShopContext.Provider>;
};
