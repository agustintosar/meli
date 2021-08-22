import React from 'react'

export default function ItemDetails(props) {
    const {item} = props;

    return (
        <div className="row card">
            <div className="container top">
                <div className="col-2">
                    <img src={item.image} alt={item.name} className="large"></img>
                    <div className="description">
                        <p className="title">Descripcion del producto</p>
                        <h2 className="text">{item.description}</h2>
                    </div>
                </div>
                <div className="col-1">
                    <p className="status">{item.status}</p>
                    <h1 className="title">{item.title}</h1>
                    <p className="price">${item.price}</p>
                    <button className="primary block">Comprar</button>
                </div>
            </div>
        </div>
    )
}
