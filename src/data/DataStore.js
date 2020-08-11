import { createStore } from 'redux';
import { PizzaReducer } from './PizzaReducer';
import {CommonReducer} from './CommonReducer';
import{CartReducer} from './CartReducer';

export const PizzaDataStore = createStore(CommonReducer(PizzaReducer, CartReducer));
