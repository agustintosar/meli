import React from 'react'

export default function ItemDetails(props) {
    const { title, description, price, picture, condition, sold_quantity } = props.item;

    return (
        <div className="row card">
            <div className="container top">
                <div className="col-2">
                    <div className="image">
                        <img src={picture} alt={title} className="large"></img>
                    </div>
                    <div className="description">
                        <p className="title">Descripcion del producto</p>
                        <h2 className="text">{description}</h2>
                    </div>
                </div>
                <div className="col-1">
                    <p className="status">{`${condition} - ${sold_quantity} vendidos`}</p>
                    <h1 className="title">{title}</h1>
                    <p className="price">$ {price?.amount.toLocaleString()}</p>
                    <button className="primary block">Comprar</button>
                </div>
            </div>
        </div>
    )
}
