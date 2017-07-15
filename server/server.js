var path=require('path');
const express=require('express');
const http=require('http');
const socketIO=require('socket.io');

var publicPath=path.join(__dirname,'../public');
const port=process.env.PORT || 3000;
const app=express();

var server=http.createServer(app);
var io=socketIO(server);


app.use(express.static(publicPath));
io.on('connection',(socket)=>{
  console.log('new User connected');



  // socket.emit('newEmail',{
  //   from:'atik@gmail.com',
  //   text:'hey! nice to meet you',
  //   createdAt:'time'
  // });

socket.emit('newMessage',{
  to:'Atik',
  text:'Welcome here',
  createdAt:123232
});

  // socket.on('createEmail',(newEmail)=>{
  //   console.log('Create Email',newEmail);
  // });

socket.on('createMessage',(message)=>{
  console.log(message);
});
  socket.on('disconnect',()=>{
    console.log('user disconnected');
  });
});

server.listen(port,()=>{
  console.log(`Server start on port ${port}`);
})
