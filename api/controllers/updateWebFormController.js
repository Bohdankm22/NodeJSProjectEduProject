var mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');

exports.renderUpdateFishery = function (req, res) {
    res.render('addfisheryinfo');
};

exports.updateFisheryInfo = function (req, res) {

    FishTrack.findById(req.query.tracking_code, function (err, track_numb) {
        if (err)
            res.send(err);
        res.json(track_numb);
    });
};