
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { itemDetailsReducer, itemListReducer } from './reducers/itemReducer';

const initialState = {};
const reducer = combineReducers({
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;