import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

import items from './routes/items.js';

dotenv.config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors({
    origin: ['http://localhost:3000']
}));


app.use('/api/items', items);

app.listen(port, () => {
  console.log(`Meli API listening at http://localhost:${port}`)
})