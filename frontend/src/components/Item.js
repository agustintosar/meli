import React from 'react'

import { Link } from 'react-router-dom';

export default function Item(props) {
    const { id, picture, title, priceAmount, priceCurrency } = props;

    return (
        <div className="row card">
            <Link to={`/items/${id}`}>
                <img src={picture} alt={title} className="medium pointer"/>
            </Link>
            <div className="card-body">
                <h2 className="price">{priceCurrency} {priceAmount}</h2>
                <Link to={`/items/${id}`}>
                    <h2 className="title pointer">{title}</h2>
                </Link>
            </div>
        </div>
    )
}
