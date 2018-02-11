'use strict';

var mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');

let jwt = require('jsonwebtoken');


exports.get_fish_tracking_info = function (req, res) {
    //jwt.decode(req.params.tracking_code);

    // FishTrack.find({}, function (err, fish) {
    //     res.json(fish);
    // })
    FishTrack.findById(req.query.tracking_code, function (err, track_numb) {
        if (err)
            res.send(err);
        res.json(track_numb);
    });
};