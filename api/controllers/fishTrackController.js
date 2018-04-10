'use strict';

let mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');

let jwt = require('jsonwebtoken');


exports.get_fish_tracking_info = function (req, res) {
    jwt.decode(req.params.tracking_code);
    FishTrack.find({}, function (err, fish) {
        res.json(fish);
    })
};

