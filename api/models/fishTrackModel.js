'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let FishTrackSchema = new Schema(
    {
        fishery: {
            name: {
                type: String
            },
            location: {
                type: String
            },
            catch_time: {
                type: Date
            },
            territory: {
                type: String
            },
            fish_type: {
                type: String
            },
            batch_size: {
                value: {
                    type: Number
                },
                unit: {
                    type: String
                }
            },
            handling: {
                type: String
            },
            temperature: {
                value: {
                    type: Number
                },
                unit: {
                    type: String
                }
            }
        },
        logistics: {
            name: {
                type: String
            },
            pick_up_time: {
                type: Date
            },
            handling: {
                type: String
            },
            temperature: {
                value: {
                    type: Number
                },
                unit: {
                    type: String
                }
            }
        },
        retail: {
            name: {
                type: String
            },
            received: {
                type: Date
            },
            handling: {
                type: String
            },
            temperature: {
                value: {
                    type: Number
                },
                unit: {
                    type: String
                }
            },
            expected_shelf_life: {
                value: {
                    type: Number
                },
                unit: {
                    type: String
                }
            },
            best_before: {
                type: Date
            }
        }
    }
);

module.exports = mongoose.model('FishTrack', FishTrackSchema);