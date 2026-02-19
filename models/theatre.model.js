const mongoose = require('mongoose');

/**
 * Defines the schema of theatre resource to be stored in the database
 */

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: String,

    city:{
        type: String,
        required: true
    },

    pincode: {
        type: String,
        required: true
    },

    address: String
}, {timestamps: true});

const Theatre = mongoose.model('Theatre', theatreSchema); // create a new model
// mongoose.model takes two parameters (modelname, schema)
module.exports = Theatre; // default export of Theatre || Returning the model