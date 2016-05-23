var path = require('path'),
    express = require('express'),
    app = express(),
    http = require('http'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    socketIO = require('socket.io'),
    io,server,channel,listener,
    dbConnection = require(path.join(__dirname,'services','dbConnection')),
    socketConnection;

socketConnection = require(path.join(__dirname,'services','socketConnection'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;


//todo
//socketMain(io,loggerMessages)
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'..','client')));

channel = require(path.join(__dirname,'routes','channel'));

app.use('/channel',channel);

server = http.Server(app);
listener = server.listen(port,function(){
   var port =  listener.address().port;
   console.log('listening on '+ port);
});

io = socketIO.listen(server);

//Connect to Mongo
dbConnection.connect('sriChat');
socketConnection.setupSocket(io);
