const mongoose = require('mongoose');

const discussSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, {timestamps: true})


const discussModel = mongoose.model("discuss", discussSchema, "discuss");

module.exports = discussModel;