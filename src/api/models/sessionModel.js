/** Import librairy **/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** Create schema **/
let sessionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

/** Export schema **/
module.exports = mongoose.model('Session', sessionSchema)