const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config()

const http = require('http').createServer(app);
http.listen(process.env.PORT)