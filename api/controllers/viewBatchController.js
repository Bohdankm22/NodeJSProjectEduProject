let mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');

//TODO get info for specific BATCH from DATABASE
//TODO render page


exports.renderViewBatch = function (req, res) {
    res.render('viewbatch');
};