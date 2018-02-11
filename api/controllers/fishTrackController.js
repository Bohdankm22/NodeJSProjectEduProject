'use strict';

var mongoose = require('mongoose'),
    FishTrack = mongoose.model('FishTrack');

let jwt = require('jsonwebtoken');


exports.get_fish_tracking_info = function (req, res) {
    //jwt.decode(req.params.tracking_code);
    new FishTrack(
        {
            fishery: {
                name: 'Fort Erie Fisheries CO',
                location: 'Fort Erie, ON, Canada',
                catch_time: Date.now(),
                territory: 'Lake Erie',
                fish_type: 'Salmon',
                batch_size: {
                    value: 450,
                    unit: 'lb'
                },
                handling: 'Frozen',
                temperature: {
                    value: -5,
                    unit: 'C'

                },
                logistics: {
                    name: 'East Logistics',
                    pick_up_time: Date.now(),
                    handling: 'Frozen',
                    temperature: {
                        value: -5,
                        unit: 'C'
                    }
                },
                retail: {
                    name: 'Metro Store',
                    received: Date.now(),
                    handling: 'Cold Storage',
                    temperature: {
                        value: 0,
                        unit: 'C'
                    },
                    expected_shelf_life: {
                        value: 2,
                        unit: 'week'
                    },
                    best_before: Date.now()
                }
            }
        }).save();


    FishTrack.findById(req.params.tracking_code, function (err, track_numb) {
        if (err)
            res.send(err);
        res.json(track_numb);
    });
};