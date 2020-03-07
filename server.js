const PORT = 5000
const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
var app = express();

// middleware
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/', index);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));