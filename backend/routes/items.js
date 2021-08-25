import express from 'express';
import axios from 'axios';

const items = express.Router();

items.get('/', async (req, res) => {
    const q = req.query.q;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${q}`;
    const encodedURL = encodeURI(url);
    const itemsLength = 4;
  
    try {
        const { data } = await axios.get(encodedURL);

        const items = data.results.slice(0, itemsLength).map((item) => ({
            "id": item.id,
            "title": item.title,
            "price": {
                "currency": item.currency_id, 
                "amount": item.price, 
                "decimals": 2 // find decimals
            },
            'picture': item.thumbnail,
            'condition': item.condition,
            'free_shipping': item.shipping.free_shipping,
            'state': item.address.state_name
        }));
        
        const categoriesValues = data.filters.find(filter => filter.id === 'category').values;
        const categories = categoriesValues ? categoriesValues.map((category) => ({
            id: category.id,
            name: category.name
        })) : [];

        const payload = {
            'author': {
                'name': 'name', // find name
                'lastname': 'lastname' // find lastname
            },
            'categories': categories,
            'items': items
        };
        
        res.send(payload);
    } catch (error) {
      res.send(error);
    }
});
  
items.get('/:id', async (req, res) => {
    const id = req.params.id;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const encodedURL = encodeURI(url);
  
    try {
        const respItem = await axios.get(encodeURI(encodedURL));
        const respDescription = await axios.get(encodeURI(`${encodedURL}/description`));

        const { id, title, currency_id, price, pictures, condition, shipping, sold_quantity } = respItem.data;
        const { plain_text } = respDescription.data;

        const payload = {
            'author': {
                'name': 'name', // find name 
                'lastname': 'lastname' // find lastname
            },
            'item': {
                'id': id, 
                'title': title, 
                'price': {
                    'currency': currency_id, 
                    'amount': price, 
                    'decimals': 2, // find decimals
                },
                'picture': pictures[0].url,
                'condition': condition,
                'free_shipping': shipping.free_shipping, 
                'sold_quantity': sold_quantity,
                'description': plain_text
            } 
        } 

        res.send(payload);
    } catch (error) {
      res.send(error);
    }
});

export default items;