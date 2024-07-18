const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "videos"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
}, {timestamps: true});



const playlistModel = mongoose.model("playlists", playlistSchema, "playlists");

module.exports = playlistModel;