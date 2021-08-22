import React from 'react'

import { Link } from 'react-router-dom';

export default function Item(props) {
    const {item} = props;

    return (
        <div className="row card">
        <Link to={`/items/${item.id}`}>
          <img src="../Logo_ML@2x.png.png" alt="product" className="medium pointer"/>
        </Link>
        <div className="card-body">
          <h2 className="price">${item.price}</h2>
          <Link to={`/items/${item.id}`}>
            <h2 className="title pointer">{item.name}</h2>
          </Link>
        </div>
      </div>
    )
}
