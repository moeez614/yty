const mongoose = require("mongoose");

const connectDB  =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected at filing system`);
    }
    catch(err){
        await mongoose.connect(process.env.MONGO_DEMO)
        console.log(err + " And Connected on Localhost");
    }
}

module.exports = connectDB