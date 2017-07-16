//Main starting point
const express = require('express');
// import express from 'express';
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan')

const app = express()
const router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')

//DB Setup
mongoose.connect('mongodb://localhost:chat-app/chat-app');

//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//a comment

//Server Setup
const port = process.env.PORT || 8090
const server = http.createServer(app);

server.listen(port)
console.log('server is listening on: ', port)