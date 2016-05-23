var express = require('express'),
    router = express.Router(),
    path = require('path'),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: false}),
    socketConnection = require(path.join(__dirname,'..','services','socketConnection'));



router.route('/:name').get(function(request,response){
    var channelName = request.params.name;
    socketConnection.createChannel(channelName);
    response.send(200).json('Channel Created Successfully');
}).post(parseUrlencoded,function(request,response){
    //var data = request.body
    respones.send(200).json('Coming Soon');
});


module.exports = router;