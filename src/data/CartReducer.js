import {ActionTypes} from './types';

const initState = {cart: [], cartCost: 2};
export const CartReducer = (state, action) => {
    state = {...initState, ...state};
    switch (action.type){
        case ActionTypes.CART_ADD_REMOVE:
            return processCartAddRemove(state, action);
        case ActionTypes.CART_CLEAR:
            return {...initState};
        default:
            return state;
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
