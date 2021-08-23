import { ITEM_LIST_ERROR, ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS } from "../constants/itemConstants";

export const itemListReducer = (state = { loading: true, items: [] }, action) => {
    switch (action.type) {
        case ITEM_LIST_REQUEST:
            return { loading: true};
        case ITEM_LIST_SUCCESS:
            return {loading: false, items: action.payload};
        case ITEM_LIST_ERROR:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}