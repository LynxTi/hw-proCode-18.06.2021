const express = require('express');
const path = require('path');

const mainRouter = require('./routes/main.js');
const blogRouter = require('./routes/blog.js');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', mainRouter);
server.use('/blog', blogRouter);




server.listen('8000');