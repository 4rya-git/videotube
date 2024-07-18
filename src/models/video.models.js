const mongoose = require('mongoose');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // cloudinary  URL
        required: true,
    },
    thumbnail: {
        type: String, // cloudinary  URL
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    views: {
        type: Number,
        default: 0,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);

const videoModel = mongoose.connect("videos", videoSchema, "videos");


module.exports = videoModel;