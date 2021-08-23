import axios from "axios";
import { BASE_URL } from '../constants';
import { ITEM_LIST_ERROR, ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS } from "../constants/itemConstants"

export const listItems = () => async (dispatch) => {
    dispatch({type: ITEM_LIST_REQUEST});
    try {        
        const { data } = await axios.get(`${BASE_URL}/items`);
        console.log(data);
        dispatch({type: ITEM_LIST_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type: ITEM_LIST_ERROR, payload: err.messaage});
    }
}