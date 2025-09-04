const mongoose = require("mongoose");

// db function setup
function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database connected successfully");
        
    }).catch((err)=>{
        console.log("Database connection failed");
        console.log(err);
    })
}

module.exports = connectDB;
