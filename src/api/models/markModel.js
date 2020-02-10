/** Import librairy **/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Create schema **/
const markSchema = new Schema({
    mark: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    module_id: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

/** Export schema **/
module.exports = mongoose.model('Mark', markSchema);
