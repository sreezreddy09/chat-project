var mongo = require('mongodb'),
    Server = mongo.Server,
    dB = {},
    defaultDBName,
    MongoClient = require('mongodb').MongoClient;

//var mongoClient = mongo.MongoClient;
var server = new Server('45.55.197.92', 27017, {auto_reconnect: true});
var mongoClient = new MongoClient(server, {native_parser: true});

var mongoUrl = "mongodb://45.55.197.92:27017";

 function connect (dbName){
     defaultDBName = dbName;

    if(dB[dbName]){
        return dB[dbName];
    }
    mongoClient.connect(mongoUrl+'/'+dbName,function(err,db){
        if(err){
            console.log(err);
            console.log("Problem with mongo, help!");
            process.exit(1);
        }else{
            console.log("Yay, mongo!");
            dB[dbName]= db;
        }
    });
};


function getDB(dbName){
     dbName = dbName || defaultDBName;
     return dB[dbName];
}

module.exports = {
    connect: connect,
    getDB : getDB
}