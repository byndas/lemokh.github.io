// setup socket client
var socket = io();

// called when player moves piece
var handleMove = function(firstClick, secondClick) {
    socket.emit('move', [firstClickId,  secondClickId]);
};

// called when the server calls socket.broadcast('move')
socket.on('move', function (msg) {
    // trigger both clicks in the waiting player's main.js
});