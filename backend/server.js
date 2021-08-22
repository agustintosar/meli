import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import data from './data.js';

dotenv.config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.get('/api/items', (req, res) => {
  res.send(data.items);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Meli API listening at http://localhost:${port}`)
})