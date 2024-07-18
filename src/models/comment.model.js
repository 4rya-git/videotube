const mongoose = require('mongoose');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');

const commentSchema = new mongoose.Schema({
        content: {
            type: String,
            required: true
        },
        video: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "videos"
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
},{ timestamps: true });


commentSchema.plugin(mongooseAggregatePaginate);

const commentModel = mongoose.model("comments", commentSchema, "comments");

module.exports = commentModel;