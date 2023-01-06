const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 26,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true

    },
    password: {
        type: String,
        required: true,
        minlength: 3,
    },
    admin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)