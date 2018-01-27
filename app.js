'use strict';
var http = require("http");
var port = process.env.PORT || 1337;
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL to local MongoDB
var url = 'mongodb://localhost:27017/courses';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world from COMP-308 Student!")
}).listen(port);