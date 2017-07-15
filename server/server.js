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

  socket.on('disconnect',()=>{
    console.log('user disconnected');
  })
});

server.listen(port,()=>{
  console.log(`Server start on port ${port}`);
})
