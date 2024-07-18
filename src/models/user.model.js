const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String, // cloudinary URL
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "videos",
        },
    ],
    password: {
        type: String,
        required: [true, "password is required"], // This will give password is required if password is not given
    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true });

const userModel = mongoose.model('users', userSchema, 'users');

module.exports = userModel;