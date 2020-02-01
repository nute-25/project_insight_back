/** Import librairy **/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Create schema **/
let userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

/** Export schema **/
module.exports = mongoose.model('User', userSchema);