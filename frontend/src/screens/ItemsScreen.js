import React, { useEffect } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { listItems } from '../actions/itemActions';

import Item from '../components/Item'

export default function ItemsScreen(props) {
    const q = props.match.params.q;
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList);
    const { loading, error, items } = itemList;

    useEffect(() => {
        dispatch(listItems(q));
    }, []);

    return (
        <div className="row center items">
        {
            loading ? (
                <p> cargando... </p>
            ) : error ? (
                <p> {error} </p>
            ) : (
                items.map((item) => (
                    <Item key={item.id} item={item}></Item>
                )))
        }
        </div>
    )
}
