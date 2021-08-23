
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { itemListReducer } from './reducers/itemReducer';

const initialState = {};
const reducer = combineReducers({
    itemList: itemListReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;