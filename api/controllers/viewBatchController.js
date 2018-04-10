let mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');
let jwt = require('jsonwebtoken');

//TODO get info for specific BATCH from DATABASE
//TODO render page

exports.renderViewBatch = function (req, res) {
    res.render('viewbatch');
};

exports.viewBatchById = function (req, res) {
    jwt.decode(req.params.tracking_code);
    let mockBatchId = "5a7fbad293bc840014413709";
    // FishTrack.findById(req.query.tracking_code, function (err, track_numb) {
    FishTrack.findById(mockBatchId, function (err, track_numb) {
        if (err)
            res.send(err);
        res.json(track_numb);
    });
};

//?????
exports.read = function(req, res) {
    res.json(req.user);
};

exports.userByID = function (req, res, next, username) {
    // Use the 'User' static 'findOne' method to retrieve a specific user
    User.findOne({
        username: username //using the username instead of id
    }, (err, user) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Set the 'req.user' property
            req.user = user;
            console.log(user);
            // Call the next middleware
            next();
        }
    });
};