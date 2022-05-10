const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
// const GeoSchema = new Schema({
//     type: {
//         type: String,
//         default: 'Point'
//     },
//     coordinates: {
//         type: [Number],
//         index: '2dsphere'
//     }
// });

// create Schema & model
const CGUScholarSchema = new Schema({
    _id: {
        type: String,
        require: [true, "id filed is required"]
    },
    personalData: {
        name: {
            type: String
        },
        university: {
            type: String
        },
        picture: {
            type: String
        },
        label: {
            type: Array
        }
    },
    updateTime: {
        type: String
    },
    cited: {
        citations: {
            type: Object
        },
        h_index: {
            type: Object
        },
        i10_index: {
            type: Object
        }
    },
    citedRecord: {
        type: Array
    },
    // geometry: GeoSchema
});
const collectionName = 'cguscholar'
const CGUScholarProfile = mongoose.model('cguscholar', CGUScholarSchema, collectionName);
// const CGUScholarProfile = mongoose.model('cguscholar', CGUScholarSchema);


module.exports = CGUScholarProfile;
