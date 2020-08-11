import { ActionTypes } from './types';

export const CartReducer = (storeData, action) => {

    let newStore = { cart: [], cartCost: 2, ...storeData };

    switch(action.type) {

        case ActionTypes.CART_ADD_REMOVE:

            const t = action.payload.topping;

            let existing = newStore.cart.find(item => item.topping.id === t.id);
            if (existing) {



                newStore.cartCost -=  existing.topping.cost;
                newStore.cart = newStore.cart.filter(item => item !== existing );
                return newStore;


            } else {
                newStore.cart = [...newStore.cart, action.payload];
                newStore.cart = newStore.cart.map(item => {
                    if (item.topping.id === t.id) {


                        // const {id, name, cost, weight, path} = t;
                        // const svg = require(`../../${path}`);
                        // let pizzaImg = document.createElement('img');
                        // pizzaImg.setAttribute('src', {svg} );


                        newStore.cartCost+= item.topping.cost ;
                        return action.payload;
                    } else {
                        return item;
                    }
                });

            }
            return newStore;




        default:
            return storeData || {};
    }

    }

