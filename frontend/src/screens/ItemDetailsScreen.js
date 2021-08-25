import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { detailsItem } from '../actions/itemActions';
import ItemDetails from '../components/ItemDetails'

export default function ItemDetailsScreen(props) {
    const productId = props.match.params.id;
    const dispatch = useDispatch();
    const itemDetails = useSelector((state) => state.itemDetails);
    const { loading, error, item } = itemDetails;

    useEffect(() => {
        dispatch(detailsItem(productId));
    }, [dispatch, productId]);

    return (
        <div className="row center details">
            {
            loading ? (
                <p> cargando... </p>
            ) : error ? ( 
                <p> {error} </p>
            ) : (
                <ItemDetails item={ item }></ItemDetails>
            )
        }
        </div>
    )
}
