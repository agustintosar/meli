import axios from "axios";
import { BASE_URL } from '../constants';
import { ITEM_LIST_ERROR, ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS, ITEM_DETAILS_ERROR, ITEM_DETAILS_REQUEST, ITEM_DETAILS_SUCCESS } from "../constants/itemConstants"

export const listItems = (q) => async (dispatch) => {
    dispatch({type: ITEM_LIST_REQUEST, payload: q});
    try {
        const { data } = await axios.get(`${BASE_URL}/items`, { params: { q } });
        dispatch({type: ITEM_LIST_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type: ITEM_LIST_ERROR, payload: err.messaage});
    }
}

export const detailsItem = (itemId) => async (dispatch) => {
    dispatch({type: ITEM_DETAILS_REQUEST, payload: itemId});
    try {
        const { data } = await axios.get(`${BASE_URL}/items/${itemId}`);
        dispatch({type: ITEM_DETAILS_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type: ITEM_DETAILS_ERROR, payload: err.messaage});
    }
}