require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')

const {SERVER_PORT} = process.env

const {seed, getDogs} = require('./ctrl.js')

app.use(express.json())
app.use(cors())

// SEED DATABASE
//app.post('/seed', seed)


// GET DOGS
app.get('/dogs', getDogs)





app.listen(SERVER_PORT, () => console.log(`Server is up on ${SERVER_PORT}`))