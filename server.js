
require("dotenv").config()
const express = require("express")
const connectDB = require("./src/db/db")
const app = require("./src/app")
const noteModel = require("./src/models/note.model")

app.use(express.json())
connectDB()

// POST => CREATE A NOTE 
app.post("/notes",async(req,res)=>{
 const {title,content,price} = req.body
 
await noteModel.create({title,content,price})

    res.status(201).json({message:"Note created successfully"})

})

// GET => READ ALL NOTES

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"All notes fetched successfully",
        notes
    })
})

// PATCH => UPDATE A NOTE

app.patch("/notes/:id",async(req,res)=>{
    const {id} = req.params
    const {title,content} = req.body

    await noteModel.findByIdAndUpdate(id,{title,content})

    res.status(200).json({
        message:"Note updated successfully"
    })
})

// DELETE => DELETE A NOTE

app.delete("/notes/:id",async(req,res)=>{
    const {id} = req.params

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted successfully"
    })
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})