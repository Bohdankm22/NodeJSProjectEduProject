'use strict';
module.exports = function (app) {
    let fishTrack = require('../controllers/fishTrackController');
    let updateFishery = require('../controllers/updateWebFormController');

    //TODO Routes
    app.route('/trackfish')
        .get(fishTrack.get_fish_tracking_info)
        .post(fishTrack.get_fish_tracking_info);
    app.route('/update_fishery')
        .get(updateFishery.renderUpdateFishery);
};
