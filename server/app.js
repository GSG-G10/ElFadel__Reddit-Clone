const { join } = require('path');
const express = require('express');
const compression = require('compression');
require('env2')('./config.env');

const cookieParser = require('cookie-parser');
const routers = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.disabled('x-powered-by');
app.use(cookieParser());
app.set('port', process.env.PORT || 5000);

app.use(express.static(join(__dirname, '../public')));
app.use(routers);
module.exports = app;
