const express = require("express");
const cors = require("cors");

const app = express();

const {getHouses, deleteHouse, createHouse, updateHouse} = require('./contoller.js')

app.use(express.json())
app.use(cors())
// write out endpoints with handler functions

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.delete('/api/houses/:id', deleteHouse);
app.put('/api/houses/:id', updateHouse)

app.listen(4004, () => {
    console.log('server listening on 4004')
})