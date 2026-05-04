const mongoose = require("mongoose");

const googleSchema = new mongoose.Schema({
    name: String,
    email: String,
    picture: String
});

module.exports = mongoose.model("GoogleUser", googleSchema);