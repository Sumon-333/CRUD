const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: String,
    content: String,
    price:Number
    
})

const noteModel = mongoose.model("Notes",userSchema)


module.exports = noteModel