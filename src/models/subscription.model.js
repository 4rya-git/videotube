const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId, // one who is subscribing
        ref: "users"
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing
        ref: "users"
    }
}, {timestamps: true})



const subscriptionModel = mongoose.model("subscriptions", subscriptionSchema, "subscriptions");

module.exports = subscriptionModel;