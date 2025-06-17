const express = require('express')
const cors = require('cors')
const path = require('path')

require('dotenv').config();

const app = express();
app.use(express.json());
const Port = process.env.PORT || 8000;

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ["Content-Type", "Authorization"],
}))+

app.get('/', (req, res) => {
    res.send(`This is Home Route`)
})

app.listen(Port, () => {
    console.log(`server is running on Port http://localhost:${Port}`);
})