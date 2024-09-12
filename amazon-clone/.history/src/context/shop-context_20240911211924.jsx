import React, { createContext } from 'react';

export const ShopContext = createContext(null);

export const shopContextProvider = () =>
{
    return <ShopContext.Provider>shop-context
}