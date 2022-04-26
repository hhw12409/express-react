const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config()

const http = require('http').createServer(app);
http.listen(process.env.PORT, ()=> {
  console.log('server on')
})

app.use( express.static( path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname + 'public/main.html'))
})