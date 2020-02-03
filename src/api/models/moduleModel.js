/** Import librairy **/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** Create schema **/
let moduleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    speaker_id {
        type: String,
        required: true
    },
    session_id {
        type: String,
        required: true
    }
    created_at: {
        type: Date,
        default: Date.now
    }
})

/** Export schema **/
module.exports = mongoose.model('Module', moduleSchema)