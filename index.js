require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');

const port = process.env.PORT || 3003;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/dist')));


app.listen(port);