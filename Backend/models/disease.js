const mongoose = require("mongoose");

const diseaschema = new mongoose.Schema({
    Covid19: String,
    Dengue: String,
    Malaria: String,
    Typhoid: String,
    Hepatitis: String,
    Influenza: String,
    Phnemonia: String,
    Chikenpox: String,
    date: { type: Date,default: Date.now }
})

module.exports = mongoose.model("disease", diseaschema)