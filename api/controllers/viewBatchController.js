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
    FishTrack.findById(mockBatchId, function (err, batch) {
        if (err) {
            res.send(err);
        } else {
            // res.json(track_numb);
            req.batch = batch;
            let jsonBatch = JSON.parse(JSON.stringify(batch));
            console.log(jsonBatch);
            res.render('viewbatch', { batch: jsonBatch} );
        }
    });
};

//?????
exports.read = function(req, res) {
    res.json(req.track_numb);

};