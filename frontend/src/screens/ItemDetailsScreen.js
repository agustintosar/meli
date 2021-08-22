import React from 'react'

import ItemDetails from '../components/ItemDetails'

export default function ItemDetailsScreen() {
    const item = {
        id: '1234',
        status: 'nuevo - 999 vendidos',
        title: 'Product name',
        price: 100.99,
        image: '../Logo_ML@2x.png.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
    }

    return (
        <div className="row center details">
            <ItemDetails item={item}></ItemDetails>
        </div>
    )
}
