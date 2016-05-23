var allSockets= {},
    socket,
    realTimeDoctor;

function setupSocket(io){
    realTimeDoctor = io.off('/realTimeDoctor').on('connection',function(soc){
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


//
//
//module.exports = function (io){
//
//    var logger = io.of('/realTimeDoctor').on('connection',function(socket){
//
//        socket.on('docMessage',function (data){
//            console.log("got message: " + data.message + ' from ' + data.sender)
//            loggerMessages.push(data);
//            socket.broadcast.emit('loggerMessage', JSON.stringify(loggerMessages));
//        });
//
//
//    });
//
//
//}