const express = require('express');
const hotelData = require('./data/hotelData.json');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
    res.send('shawpno hotel server is running')
})

app.get('/hotel-data', (req, res) => {
    res.send(hotelData)
})
app.get('/hotel-data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const room = hotelData.find(room => room.id === id) || {};
    res.send(room);
    console.log(id)
})
app.listen(port, () => {
    console.log(`shawpno Running in port is ${port}`)
})