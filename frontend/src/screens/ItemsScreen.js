import React from 'react'
import Item from '../components/Item'

export default function searchScreen() {
    const items = [{
        id: '1234',
        name: 'Product name',
        price: 100.99
    },
    {
        id: '12345',
        name: 'Product name',
        price: 98.99
    }];

    return (
        <div className="row center items">
            {items.map((item) => (
                <Item key={item.id} item={item}></Item>
            ))}
        </div>
    )
}
