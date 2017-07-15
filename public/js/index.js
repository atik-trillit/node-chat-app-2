var socket=io();

socket.on('connect',function(){
  console.log('connected to server');

// socket.emit('createEmail',{
//   to:'santosh@gmail.com',
//   text:'hi nice to meet you again'
// });

socket.emit('createMessage',{
  from:'Atik',
  text:'Hi there!'
});
});

socket.on('disconnect',function(){
  console.log('disconnected to server');
});

// socket.on('newEmail',function(email){
//   console.log('New Email',email);
// });
socket.on('newMessage',function(message){
  console.log('message',message);
});
