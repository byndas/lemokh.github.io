// setup my socket client
var socket = io();

// called when a player makes a move on the board UI
var handleMove = function(source, target) {
    var move = [ [x1,y1], [x2,y2] ];
    // if (move === null)  return 'snapback';
    socket.emit('move', move);
};

// called when the server calls socket.broadcast('move')
socket.on('move', function (msg) {
    // trigger the two clicks [ [x1,y1], [x2,y2] ]
    // on the waiting player's html
});