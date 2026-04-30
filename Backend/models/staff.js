const mongoose = require("mongoose");

const staffschema = new mongoose.Schema({
    Doctors: String,
    Nurses: String,
    Paramedics: String,
    Others: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("staff", staffschema)