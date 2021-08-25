import React, { useEffect } from 'react';
import  { useDispatch, useSelector } from 'react-redux';

import { listItems } from '../actions/itemActions';
import Item from '../components/Item'

export default function ItemsScreen(props) {
    const { q } = props.location.state;
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList);
    const { loading, error, items } = itemList;

    useEffect(() => {
        dispatch(listItems(q));
    }, [dispatch, q]);

    return (
        <div className="row center items">
        {
            loading ? (
                <p> cargando... </p>
            ) : error ? (
                <p> {error} </p>
            ) : (
                items?.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        picture={item.picture}
                        title={item.title}
                        priceAmount={item.price.amount}
                        freeShipping={item.free_shipping}
                        state={item.state}
                    >
                    </Item>
                ))
            )
        }
        </div>
    )
}
