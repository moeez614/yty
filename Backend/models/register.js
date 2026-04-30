const mongoose = require("mongoose");

const registerschema = new mongoose.Schema({
    usern: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("register", registerschema)