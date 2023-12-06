import React, { useState } from "react";


const ProductContext = React.createContext({});

export default ProductContext;

export const ProductContextProvider =  ({children}) =>{

    const [productsList, setProductsList] = useState({
        products:[],
        category: [],
        response:0
    });

return <ProductContext.Provider value={{productsList, setProductsList}}>{children}</ProductContext.Provider>;

}