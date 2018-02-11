'use strict';
module.exports = function (app) {
    var fishTrack = require('../controllers/fishTrackController');

    // todoList Routes
    app.route('/trackfish')
        .get(fishTrack.get_fish_tracking_info)
        .post(fishTrack.get_fish_tracking_info);

};
