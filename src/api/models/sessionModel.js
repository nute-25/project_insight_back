/** Import librairy **/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Create schema **/
const sessionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

/** Export schema **/
module.exports = mongoose.model('Session', sessionSchema);
