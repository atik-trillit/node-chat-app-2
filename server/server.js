var path=require('path');
const express=require('express');
const http=require('http');
const socketIO=require('socket.io');
const {generateMessage}=require('./utils/message');

var publicPath=path.join(__dirname,'../public');
const port=process.env.PORT || 3000;
const app=express();

var server=http.createServer(app);
var io=socketIO(server);


app.use(express.static(publicPath));
io.on('connection',(socket)=>{
  console.log('new User connected');

socket.emit('newMessage',generateMessage('Andmin','Welcome to the chat app'));

socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

socket.on('createMessage',(message)=>{
  io.emit('newMessage',generateMessage(message.from,message.text));
});

  socket.on('disconnect',()=>{
    console.log('user disconnected');
  });
});

server.listen(port,()=>{
  console.log(`Server start on port ${port}`);
})
