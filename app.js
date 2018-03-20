let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    FishTrack = require('./api/models/fishTrackModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://dbUser:dbUser2342!@138.197.163.67:27017/fishdb', function (err, db) {
    if(err) { return console.dir(err); }

});

//Adding EJS view template engine
app.set('view engine', 'ejs');
app.set('views','./api/views');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/public", express.static(__dirname + "/public"));


let routes = require('./api/routes/fishTrackRoutes'); //importing route
routes(app); //register the route

// Invalid requests handler
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('Server started at: ' + 'http://localhost:' + port);