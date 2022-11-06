'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const police_databaseRoutes = require('./routes/policedataRoutes');

const app = express();

app.use = express();
app.use(cors());
app.use(bodyParser.json());

app.use('./api',police_databaseRoutes.routes);
app.listen(config.port, () => console.log('App is listening on url http://localhost:'+ config.port))
