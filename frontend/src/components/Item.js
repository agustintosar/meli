import React from 'react'

import { Link } from 'react-router-dom';

export default function Item(props) {
    const { id, picture, title, priceAmount, freeShipping, state } = props;

    return (
        <div className="card row">
            <div className="body row top">
                <div className="image">
                    <Link to={`/items/${id}`}>
                        <img src={picture} alt={title} className="medium pointer"/>
                    </Link>
                </div>
                <div className="content">
                    <div className="price row">
                        <h2>$ {priceAmount.toLocaleString()}</h2>
                        { freeShipping && <img src="../../ic_shipping.png" alt="Free shipping" className="icon"/> }
                    </div>
                    <Link to={`/items/${id}`}>
                        <h2 className="title pointer">{title}</h2>
                    </Link>
                </div>
                <div className="state">
                    <p>{state}</p>
                </div>
            </div>
        </div>
    )
}
