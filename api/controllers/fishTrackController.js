'use strict';

var mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');


exports.get_fish_tracking_info = function (req, res) {
    //req.params.tracking_code

    FishTrack.findById(req.params.tracking_code, function (err, track_numb) {
        if (err)
            res.send(err);
        res.json(track_numb);
    });
};