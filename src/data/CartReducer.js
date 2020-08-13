import {ActionTypes} from './types';

export const CartReducer = (storeData, action) => {

    const newStore = {cart: [], cartCost: 2, ...storeData};

    switch (action.type) {

        case ActionTypes.CART_ADD_REMOVE:
            return processCartAddRemove(newStore, action);

        case ActionTypes.CART_CLEAR:
            return {...storeData, cart: [], cartCost: 2};

        default:
            return storeData || {};
    }
};


const processCartAddRemove = (state, action) => {
    const t = action.payload.topping;
    const existing = state.cart.find(item => item.topping.id === t.id);
    if (existing) {
        state.cartCost -= existing.topping.cost;
        state.cart = state.cart.filter(item => item !== existing);
        return state;

    } else {
        state.cart = [...state.cart, action.payload];
        state.cart = state.cart.map(item => {
            if (item.topping.id === t.id) {
                state.cartCost += item.topping.cost;
                return action.payload;
            } else {
                return item;
            }
        });
        return state;
    }
};
