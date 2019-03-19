'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const HOSTNAME = 'localhost';
var app = express();
app.use(bodyParser.json());

require('./server/routes')(app);

app.listen(PORT, HOSTNAME, () => {
  console.log('El servidor está corriendo en http://' + HOSTNAME + ':' + PORT);
})
