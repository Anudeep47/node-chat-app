const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App :)'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'Yayy, A new user has joined our Chat App :)'));

  socket.on('createMessage', (message, callback) => {
    console.log('message to be created: ', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('from server');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected')
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
