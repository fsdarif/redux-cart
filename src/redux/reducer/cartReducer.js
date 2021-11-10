import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cartActions"

const initilState = {
    cart: [],
    products: [
        {name: 'Phone', id: 1},
        {name: 'Mobile', id: 2},
        {name: 'Cat', id: 3},
        {name: 'Dog', id: 4},
        {name: 'Horse', id: 5},
        {name: 'Birds', id: 6},
        {name: 'Coil', id:7},
]
};

const cartReducer = (state = initilState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            console.log(action)
            const newCartItems = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newCartItems];
            return{...state, cart: newCart}
            default: 
            return state;
            
            case REMOVE_FROM_CART:
                const id = action.id;
                const remainingCart = state.cart.filter(item => item.cartId !== id);
                return {...state, cart: remainingCart}

    }
}

export default cartReducer;