var socket=io();

socket.on('connect',function(){
  console.log('connected to server');

// socket.emit('createEmail',{
//   to:'santosh@gmail.com',
//   text:'hi nice to meet you again'
// });

// socket.emit('createMessage',{
//   from:'Atik',
//   text:'Hi there!'
// });
});

socket.on('disconnect',function(){
  console.log('disconnected to server');
});

// socket.on('newEmail',function(email){
//   console.log('New Email',email);
// });
socket.on('newMessage',function(message){
  console.log('message',message);
  var li=jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.emit('createMessage',{
  from:'Frank',
  text:'this is a message from frank'
},function(data){
  console.log('got it',data);
});

socket.on('newLocationMessage',function(message){
  var li=jQuery('<li></li>');
  var a=jQuery('<a target="_blank">My current Place</a>');

  li.text(`${message.from}: `);
  a.attr('href',message.url)
  li.append(a);
  jQuery('#messages').append(li);

});



jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
var locationButton=jQuery('#send-location');
locationButton.on('click',function(){
  if(!navigator.geolocation){
    return alert('Geolocation not supported by browser');
  }

  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    socket.emit('createLocationMessage',{
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    });
  },function(){
    alert('unable to fetch geolocation');
  });
});
// var location=jQuery('#send-location');
// location.on('click',function(){
//   if(!navigator.geolocation){
//     return alert('Geolocation not supported by your browser');
//   }
//   navigator.geolocation.getCurrentPosition(function(position){
//     console.log(position);
//   },function(){
//     alert('Unable to fetch location');
//   });
// });
