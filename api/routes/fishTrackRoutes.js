'use strict';
module.exports = function (app) {
    let fishTrack = require('../controllers/fishTrackController');
    let updateFishery = require('../controllers/updateWebFormController');
    let viewBatch = require('../controllers/viewBatchController');


    //TODO Routes
    app.route('/trackfish')
        .get(fishTrack.get_fish_tracking_info)
        .post(fishTrack.get_fish_tracking_info);
    app.route('/update_fishery')
        .get(updateFishery.renderUpdateFishery);


    app.route('/viewbatch')
        .get(viewBatch.renderViewBatch);
    app.route('/viewbatch/:batchId')
        .get(viewBatch.read);
        // .put(viewBatch.update);

    app.param('batchId', viewBatch.viewBatchById);
};
