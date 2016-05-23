var allSockets= {},
    socket,
    realTimeDoctor,
    db = require('./dbConnection');

function setupSocket(io){
    realTimeDoctor = io.of('/realTimeDoctor').on('connection',function(soc){
        socket = soc;
    });
}

function createChannel(name){
    if(!allSockets[name]) {
        socket.on(name,function(data){
            console.log("Channel "+name + ' Received Message: '+ data.message + ' from '+ data.sender);
            socket.broadcast.emit(name,data);
        });
        allSockets[name] = 'Established Socket Channel ' + name;
    }
}

module.exports = {
    setupSocket: setupSocket,
    createChannel : createChannel
};

