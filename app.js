require('dotenv').config();
const express = require('express');

const router = require('./router/mugRouter');
const app = express();

app.use(express.json())
app.use('/mug',router)

const port = process.env.PORT || 3000;

app.listen(port, _ => {
console.log(`Running on ${port}`)
});