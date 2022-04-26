const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config()

const http = require('http').createServer(app);
http.listen(process.env.PORT, ()=> {
  console.log('server on')
})

app.use( '/', express.static( path.join(__dirname, 'public')))
app.use( '/react',express.static( path.join(__dirname, 'react-project/build')))

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, 'public/main.html'))
})

app.get('/react', (req, res) => {
  res.sendFile( path.join(__dirname, 'react-project/build/index.html'))
})