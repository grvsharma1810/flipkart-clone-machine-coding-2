export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const INCREASE_PRODUCT_QUANTITY = "increaseProductQuantity";
export const REMOVE_FROM_SAVED_FOR_LATER = "removeFromSavedForLater";
export const ADD_TO_SAVED_FOR_LATER = "addToSavedForLater";

export default function cartReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };

        case ADD_TO_SAVED_FOR_LATER:
            return { ...state, savedForLater: [...state.savedForLater, action.payload] };

        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(product => product.id !== action.payload.productId) }

        case REMOVE_FROM_SAVED_FOR_LATER:
            return { ...state, savedForLater: state.savedForLater.filter(product => product.id !== action.payload.productId) }

        case INCREASE_PRODUCT_QUANTITY:
            return {
                ...state, cart: state.cart.map(product => {
                    if (product.id === action.payload.productId) {
                        return { ...product, quantity: product.quantity + 1 }
                    } else {
                        return product;
                    }
                })
            }



        default: return state;
    }
}