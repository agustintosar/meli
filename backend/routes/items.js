import express from 'express';
import axios from 'axios';

const items = express.Router();

items.get('/search', async (req, res) => {
    // const q = req.query.q;
    const q = 'Motorola';
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${q}`;
    const encodedURL = encodeURI(url);
  
    try {
        const resItems = await axios.get(encodedURL);

        let items = resItems.results ? resItems.results : [];

        items = items.map((item) => ({
            "id": item.id,
            "title": item.title,
            "price": {
                "currency": item.prices[0].currency_id, 
                "amount": item.prices[0].amount, 
                "decimals": 2 // find decimals
            },
            'picture': item.thumbnail,
            'condition': item.condition,
            'free_shipping': item.shipping.free_shipping
        }));

        const categories = [];

        const data = {
            'author': {
                'name': 'name', // find name
                'lastname': 'lastname' // find lastname
            },
            'categories': categories,
            'items': items
        };
        
        res.send(data);
    } catch (error) {
      res.send(error);
    }
});
  
items.get('/:id', async (req, res) => {
    // const id = req.params.id;
    const id = 'MLA929295024';
    const url = `https://api.mercadolibre.com/items/${id}`;
    const encodedURL = encodeURI(url);
  
    try {
        const respItem = await axios.get(encodeURI(encodedURL));
        const respDescription = await axios.get(encodeURI(`${encodedURL}/description`));

        const { id, title, currency_id, price, pictures, condition, shipping, sold_quantity } = respItem.data;
        const { plain_text } = respDescription.data;

        const data = {
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

        res.send(data);
    } catch (error) {
      res.send(error);
    }
});

export default items;