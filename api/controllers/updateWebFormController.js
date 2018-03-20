var mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');


//TODO move to separate controller
//added for sandbox purposes
exports.renderViewBatch = function (req, res) {
    res.render('viewbatch');
};

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