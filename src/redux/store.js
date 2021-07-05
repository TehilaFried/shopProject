import {combineReducers, createStore } from 'redux';
import products from './reducers/product';
import basket from './reducers/basket';

const reducer = combineReducers({ products});

const store = createStore(reducer);
window.store = store;
export default store;