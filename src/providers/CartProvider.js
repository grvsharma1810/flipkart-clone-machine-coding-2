import { useContext, useReducer } from "react";
import { createContext } from "react";
import cartReducer from "../reducers/cart-reducer";

const CartContext = createContext({});

export function CartProvider({ children }) {
    
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: [],
        savedForLater: []
    })

    return <CartContext.Provider value={{ cartState, cartDispatch }}>
        {children}
    </CartContext.Provider >
}

export function useCart() {
    return useContext(CartContext);
}