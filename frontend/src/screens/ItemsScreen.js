import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../constants';

import Item from '../components/Item'

export default function ItemsScreen() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async  () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/items`);
                setItems(data);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="row center items">
        {
            error ? 
            <p>error</p> : 
            items.map((item) => (
                <Item key={item.id} item={item}></Item>
            ))
        }
        </div>
    )
}
