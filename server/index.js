const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')
console.log(SERVER_PORT);
app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)
console.log(getCountries);
// COUNTRIES
 app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))