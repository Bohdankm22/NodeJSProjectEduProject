'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FishTrackSchema = new Schema(
    {
        fishery: {
            name: String,
            location: String,
            catch_time: Timestamp,
            territory: String,
            fish_type: String,
            batch_size: {
                value: Number,
                unit: String
            },
            handling: String,
            temperature: {
                value: Number,
                unit: String
            }
        },
        logistics: {
            name: String,
            pick_up_time: Timestamp,
            handling: String,
            temperature: {
                value: Number,
                unit: String
            }
        },
        retail: {
            name: String,
            received: Timestamp,
            handling: String,
            temperature: {
                value: Number,
                unit: String
            },
            expected_shelf_life: {
                value: Number,
                unit: String
            },
            best_before: Timestamp
        }
    }
);

module.exports = mongoose.model('FishTrack', FishTrackSchema);