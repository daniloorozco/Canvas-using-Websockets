var express = require('express');
var app = express();

var server = app.listen(3000);
app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('New Conection; ' + socket.id);
  socket.on('mouse', mouseMsg);

  function mouseMsg(data){
    socket.broadcast.emit('mouse',data);
    //io.socket.emit('mouse', data);
    console.log(data);
  }
}
console.log("Server is running at http://localhost:3000");
console.log("Enter CNTRL-C to exit")
