const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        uid: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        location: { type: String, required: false },
        phone: { type: String, required: false },
        updated: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isAgent: {
            type: Boolean,
            default: false
        },
        skills: {
            type: Boolean,
            required: false,
            default: false,
        },
        profile: {
            type: String,
            require: true,
            default: "https://media.tenor.com/6l6DpLKOknsAAAAe/cat-nerd-emoji.png"
        },

    }, { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema)